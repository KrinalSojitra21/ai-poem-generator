import {PrimaryInput} from "@/components/primary";
import InfoDialog from "@/components/primary/components/InfoDialog";
import {GithubIcon} from "@/icons/GithubIcon";
import {NoFoundIcon} from "@/icons/NoFoundIcon";
import {defaultFormData, FormDataTypes} from "@/types/types";
import {useState} from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formCurrentData, setFormCurrentData] =
    useState<FormDataTypes>(defaultFormData);
  const [prompt, setPrompt] = useState(
    "about rainy wether, which syllable counts 4 and poem length 5-10 lines"
  );
  const [poem, setPoem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generatePoem = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-poem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({prompt, ...formCurrentData}),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPoem(data.poem);
    } catch (error) {
      console.error("Error generating poem:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className={`w-full flex md:h-screen h-full flex-col md:items-center md:overflow-hidden overflow-auto`}
    >
      <nav className="w-full p-4 flex justify-between items-center flex-none">
        <div className="text-2xl font-styrene">Ai Poiet</div>
        {/* <div className="text-lg">Contact</div> */}{" "}
        <a
          className=" scale-150 hover:text-primary flex items-center gap-1.5 pr-5"
          // className="w-8 h-8 rounded-full p-2 flex items-center justify-center  bg-primary hover:text-primary "
          type="button"
          href="https://github.com/KrinalSojitra21"
          target="_blank"
        >
          <h6 className="text-xs hover:text-primary">KrinalSojitra21</h6>
          <GithubIcon />
        </a>
      </nav>
      <div className="w-full md:justify-between flex-grow  overflow-auto md:pb-10 ">
        <div className=" w-full h-full flex md:flex-row flex-col gap-16 ">
          <div className="flex md:flex-1  flex-col gap-5 md:overflow-hidden">
            <div className="flex-grow overflow-auto p-4 flex flex-col gap-5">
              <PrimaryInput
                name="prompt"
                title="Write Prompt"
                rows={4}
                placeholder="Add Prompt Here"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <InfoDialog
                formCurrentData={formCurrentData}
                setFormCurrentData={setFormCurrentData}
              />
            </div>
            <button
              className="rounded-md px-3 py-2 bg-primary text-primary-foreground mx-4 mb-4"
              style={{maxHeight: "40px"}}
              title={"Generate"}
              onClick={generatePoem}
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Poem"}
            </button>
          </div>
          <div className="md:flex-1 h-full pb-4 md:pl-4 md:pr-0 pr-0 pl-0">
            <div className="md:rounded-l-3xl border border-border h-full overflow-hidden">
              <div className="bg-muted h-full flex flex-col items-center justify-center p-10">
                {poem ? (
                  <div className="whitespace-pre-wrap">{poem}</div>
                ) : (
                  <>
                    <NoFoundIcon />
                    <h2 className="pt-10 text-center">
                      Create your first Poem
                    </h2>
                    <h6 className="md:w-[45%] w-[80%] text-center pt-2">
                      Create your AI poem with a touch of creativity and
                      inspiration. Let the words come to life with just a click!
                    </h6>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
