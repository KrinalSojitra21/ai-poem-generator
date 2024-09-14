import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/primary/Accordion";
import {
  poeticForm,
  rhymeSchemes,
  themes,
  topics,
  favoritePoets,
  genres,
  creativityLevels,
  tones,
  onomatopoeiaWords,
  emotionsEvoked,
} from "@/constants/options";
import {PrimarySelect} from "../PrimarySelect";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "../Tabs";
import {useRouter} from "next/router";
import {FormDataTypes, Option} from "@/types/types";
import {FeatherIcon} from "@/icons/FeatherIcon";
import {BookOpenIcon} from "@/icons/BookOpenIcon";
import {ToolsIcon} from "@/icons/ToolsIcon";
import {Plus} from "@/icons/Plus";
import {Minus} from "@/icons/Minus";
import {MultiValue, SingleValue} from "react-select";

type SelectChangeEvent = SingleValue<Option> | MultiValue<Option>;

type InfoProps = {
  formCurrentData: FormDataTypes;
  setFormCurrentData: React.Dispatch<React.SetStateAction<FormDataTypes>>;
};

const defaultFormData: FormDataTypes = {
  poeticForm: null,
  rhymeScheme: null,
  syllableCount: 0,
  poemLength: null,
  theme: null,
  topic: null,
  favoritePoet: null,
  genre: null,
  creativityLevel: null,
  tone: null,
  onomatopoeiaWord: null,
  emotionEvoked: null,
};

const InfoDialog: React.FC<InfoProps> = ({
  formCurrentData,
  setFormCurrentData,
}) => {
  const router = useRouter();

  const handleChange = (
    field: keyof FormDataTypes,
    value: SelectChangeEvent | string | number
  ) => {
    if (field === "syllableCount" || field === "poemLength") {
      setFormCurrentData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    } else {
      // For select inputs, we need to handle both SingleValue and MultiValue
      const newValue = Array.isArray(value) ? value[0] : value;
      setFormCurrentData((prevData) => ({
        ...prevData,
        [field]: newValue,
      }));
    }
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="form">
        <AccordionTrigger value="form">
          <span className="flex items-center">
            <FeatherIcon className="md:mr-2 mr-1" />
            Form
          </span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4" value="form">
          <PrimarySelect
            label="Poetic form"
            options={poeticForm}
            placeholder="Choose your poetic form"
            value={formCurrentData.poeticForm}
            onChange={(value: SelectChangeEvent) =>
              handleChange("poeticForm", value)
            }
          />
          <PrimarySelect
            label="Rhyme Schemes"
            options={rhymeSchemes}
            placeholder="Select rhyme scheme"
            value={formCurrentData.rhymeScheme}
            onChange={(value: SelectChangeEvent) =>
              handleChange("rhymeScheme", value)
            }
          />
          <div className="flex items-center gap-5 h-fit">
            <label className="flex items-center h-full">Syllable Counts</label>
            <div className="flex gap-2 w-fit items-center h-7">
              <div
                className="h-5 aspect-square flex items-center justify-center rounded-sm bg-primary text-primary-foreground cursor-pointer"
                onClick={() =>
                  handleChange(
                    "syllableCount",
                    Math.max(0, formCurrentData.syllableCount - 1)
                  )
                }
              >
                <Minus size={17} />
              </div>{" "}
              <div className="border-b border-border rounded-md h-full flex items-center justify-center px-5 w-16 max-w-20">
                {formCurrentData.syllableCount}
              </div>
              <div
                className="h-5 aspect-square flex items-center justify-center rounded-sm bg-primary text-primary-foreground cursor-pointer"
                onClick={() =>
                  handleChange(
                    "syllableCount",
                    formCurrentData.syllableCount + 1
                  )
                }
              >
                <Plus size={17} />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label>Poem Lengths</label>
            <Tabs
              value={formCurrentData?.poemLength || undefined}
              onValueChange={(value: string) =>
                handleChange("poemLength", value)
              }
              className="w-full rounded-2xl"
            >
              <TabsList className="w-full flex mb-6 space-x-2">
                <TabsTrigger
                  value="short"
                  isBordered
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600 rounded-md px-2 py-1"
                >
                  <span className="flex items-center md:h-full h-5 gap-1 text-base">
                    Short
                    <span className="text-sm flex items-center h-full pt-1 md:w-fit w-0 md:visible invisible">
                      (5-10 Lines)
                    </span>
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="medium"
                  isBordered
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600 rounded-md"
                >
                  <span className="flex items-center md:h-full h-5 gap-1 text-base">
                    Medium
                    <span className="text-sm flex items-center h-full pt-1 md:w-fit w-0 md:visible invisible">
                      (10-30 Lines)
                    </span>
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="long"
                  isBordered
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600 rounded-md"
                >
                  <span className="flex items-center md:h-full h-5 gap-1 text-base">
                    Long
                    <span className="text-sm flex items-center h-full pt-1 md:w-fit w-0 md:visible invisible">
                      (30+ Lines)
                    </span>
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="inspiration">
        <AccordionTrigger value="inspiration">
          <span className="flex items-center">
            <BookOpenIcon className="md:mr-2 mr-1" />
            Inspiration
          </span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4" value="inspiration">
          <PrimarySelect
            label="Themes"
            options={themes}
            placeholder="Select a theme"
            value={formCurrentData.theme}
            onChange={(value: SelectChangeEvent) =>
              handleChange("theme", value)
            }
          />
          <PrimarySelect
            label="Topics"
            options={topics}
            placeholder="Choose a topic"
            value={formCurrentData.topic}
            onChange={(value: SelectChangeEvent) =>
              handleChange("topic", value)
            }
          />
          <PrimarySelect
            label="Favorite Poets"
            options={favoritePoets}
            placeholder="Draw inspiration from a poet"
            value={formCurrentData.favoritePoet}
            onChange={(value: SelectChangeEvent) =>
              handleChange("favoritePoet", value)
            }
          />
          <PrimarySelect
            menuPlacement="top"
            label="Genres"
            options={genres}
            placeholder="Choose a genre"
            value={formCurrentData.genre}
            onChange={(value: SelectChangeEvent) =>
              handleChange("genre", value)
            }
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="tools">
        <AccordionTrigger value="tools">
          <span className="flex items-center">
            <ToolsIcon className="md:mr-2 mr-1" />
            Tools
          </span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4" value="tools">
          <PrimarySelect
            label="Creativity Levels"
            options={creativityLevels}
            placeholder="Set your creativity level"
            value={formCurrentData.creativityLevel}
            onChange={(value: SelectChangeEvent) =>
              handleChange("creativityLevel", value)
            }
          />
          <PrimarySelect
            label="Tones"
            options={tones}
            placeholder="Choose the tone"
            value={formCurrentData.tone}
            onChange={(value: SelectChangeEvent) => handleChange("tone", value)}
          />
          <PrimarySelect
            label="Onomatopoeia Words"
            options={onomatopoeiaWords}
            placeholder="Add onomatopoeia"
            value={formCurrentData.onomatopoeiaWord}
            onChange={(value: SelectChangeEvent) =>
              handleChange("onomatopoeiaWord", value)
            }
          />
          <PrimarySelect
            label="Emotions Evoked"
            options={emotionsEvoked}
            menuPlacement="top"
            placeholder="Choose emotions to evoke"
            value={formCurrentData.emotionEvoked}
            onChange={(value: SelectChangeEvent) =>
              handleChange("emotionEvoked", value)
            }
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default InfoDialog;
