import {PrimaryInput} from "@/components/primary";
import InfoDialog from "@/components/primary/components/InfoDialog";
import Loading from "@/components/primary/Loading";
import {GithubIcon} from "@/icons/GithubIcon";
import {NoFoundIcon} from "@/icons/NoFoundIcon";
import {defaultFormData, FormDataTypes} from "@/types/types";
import {useState} from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formCurrentData, setFormCurrentData] =
    useState<FormDataTypes>(defaultFormData);
  const [desc, setDesc] = useState("");
  const [poem, setPoem] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPrompt = (prompt: string) => {
    const {
      poemLength,
      syllableCount,
      poeticForm,
      rhymeScheme,
      theme,
      topic,
      creativityLevel,
      emotionEvoked,
      favoritePoet,
      genre,
      onomatopoeiaWord,
      tone,
    } = formCurrentData;

    const specifications = [
      syllableCount !== 0 && `Syllable count per line: ${syllableCount}`,
      poemLength &&
        `Number of lines: ${poemLength === "short" ? "5-10" : poemLength === "medium" && "11-20"}`,
      poeticForm && `Poetic form: ${poeticForm.value}`,
      rhymeScheme && `Rhyme scheme: ${rhymeScheme.value}`,
      theme && `Theme: ${theme.value}`,
      creativityLevel && `Creativity level: ${creativityLevel.value}`,
      emotionEvoked && `Emotion to evoke: ${emotionEvoked.value}`,
      favoritePoet && `Style inspired by: ${favoritePoet.value}`,
      genre && `Genre: ${genre.value}`,
      onomatopoeiaWord &&
        `Include the onomatopoeia word: ${onomatopoeiaWord.value}`,
      tone && `Tone: ${tone.value}`,
    ].filter(Boolean);

    return specifications.length > 0
      ? `Write a ${poemLength ? poemLength : ""} poem ${prompt || topic?.value ? `about ${topic?.value}` : ""}, with the following specifications: ${specifications.map((spec) => `- ${spec}`).join("\n")}
Please ensure the poem adheres to these guidelines while maintaining coherence and artistic quality.`
      : `Create a unique poem based on the following randomly generated parameters:

Poetry Form: [Choose one]
Sonnet, Haiku, Free Verse, Limerick, Acrostic, Villanelle, Tanka, Ballad, Concrete Poem, Ode

Theme: [Choose one]
Nature, Love, Technology, Time, Dreams, Urban Life, Mythology, Emotions, Social Issues, Cosmic Wonder

Mood: [Choose one]
Joyful, Melancholic, Contemplative, Whimsical, Mysterious, Energetic, Serene, Rebellious, Nostalgic, Awe-inspiring

Literary Device: [Choose one or more]
Metaphor, Alliteration, Personification, Imagery, Onomatopoeia, Symbolism, Assonance, Irony, Hyperbole, Oxymoron

Word to Include: [Generate a random word]

Instructions:
1. Randomly select one option from each category above.
2. Create a poem that incorporates all the selected elements.
3. Ensure the poem adheres to the chosen form's structure and rules.
4. Aim for creativity and coherence in your composition.`;
  };

  const generatePoem = async () => {
    setIsLoading(true);
    setPoem("");
    const prompt = getPrompt(desc);
    console.log("prompt ", prompt);
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
      setPoem("An error occurred while generating the poem. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className={`w-full flex md:h-screen h-full flex-col md:items-center md:overflow-hidden overflow-auto`}
    >
      <nav className="w-full p-4 flex justify-between items-center flex-none">
        <div className="text-2xl font-styrene">AI Poet</div>
        <a
          className="scale-150 hover:text-primary flex items-center gap-1.5 pr-5"
          href="https://github.com/KrinalSojitra21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h6 className="text-xs hover:text-primary">KrinalSojitra21</h6>
          <GithubIcon />
        </a>
      </nav>

      <div className="w-full md:justify-between flex-grow overflow-auto md:pb-10">
        <div className="w-full h-full flex md:flex-row flex-col gap-16">
          <div className="flex md:flex-1 flex-col gap-5 md:overflow-hidden">
            <div className="flex-grow overflow-auto p-4 flex flex-col gap-5">
              <PrimaryInput
                name="prompt"
                title="Write Prompt"
                rows={4}
                placeholder="Add Prompt Here"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <InfoDialog
                formCurrentData={formCurrentData}
                setFormCurrentData={setFormCurrentData}
              />
            </div>
            <button
              className="rounded-md px-3 py-2 bg-primary text-primary-foreground mx-4 mb-4"
              style={{maxHeight: "40px"}}
              title="Generate"
              onClick={generatePoem}
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate Poem"}
            </button>
          </div>
          <div className="md:flex-1 h-full pb-4 md:pl-4 md:pr-0 pr-0 pl-0">
            <div className="md:rounded-l-3xl border border-border h-full overflow-hidden">
              <div className="bg-muted h-full flex flex-col items-center justify-center p-10">
                {poem === null ? (
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
                ) : poem === "" ? (
                  <Loading />
                ) : (
                  <div className="whitespace-pre-wrap overflow-auto">
                    {poem}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
