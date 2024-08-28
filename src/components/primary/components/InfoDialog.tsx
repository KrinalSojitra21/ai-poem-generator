// import {
//   poeticForm,
//   rhymeSchemes,
//   themes,
//   topics,
//   favoritePoets,
//   genres,
//   creativityLevels,
//   tones,
//   onomatopoeiaWords,
//   emotionsEvoked,
// } from "@/constants/options";
// import BookOpen from "@/icons/BookOpen copy";
// import Feather from "@/icons/Feather";
// import Minus from "@/icons/Minus";
// import Plus from "@/icons/Plus";
// import Tools from "@/icons/Tools";
// import React, {useState} from "react";
// import {PrimaryDialog} from "../PrimaryDialog";
// import {PrimarySelect} from "../PrimarySelect";
// import {Tabs, TabsList, TabsTrigger, TabsContent} from "../Tabs";
// import {useRouter} from "next/router";

// type infoProps = {
//   isDialogOpen: boolean;
//   setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };
// const InfoDialog = ({isDialogOpen, setIsDialogOpen}: infoProps) => {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState("form");
//   const [activeLength, setActiveLength] = useState("short");
//   const [formData, setformData] = useState();

//   return (
//     <PrimaryDialog
//       isOpen={isDialogOpen}
//       title={{text: "Poetic Muse"}}
//       className="h-[600px]"
//       doneButton={{
//         onClick: () => setIsDialogOpen(false),
//       }}
//       cancelButton={{
//         onClick: () => setIsDialogOpen(false),
//       }}
//     >
//       <Tabs
//         value={activeTab}
//         onValueChange={setActiveTab}
//         className="w-full rounded-2xl"
//       >
//         <TabsList className="w-full flex mb-6">
//           <TabsTrigger
//             value="form"
//             className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
//           >
//             <span className="flex items-center">
//               <Feather className="mr-2" />
//               Form
//             </span>
//           </TabsTrigger>
//           <TabsTrigger
//             value="inspiration"
//             className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
//           >
//             <span className="flex items-center">
//               <BookOpen className="mr-2" />
//               Inspiration
//             </span>
//           </TabsTrigger>
//           <TabsTrigger
//             value="tools"
//             className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
//           >
//             <span className="flex items-center">
//               <Tools className="mr-2" />
//               Tools
//             </span>
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="form" className="space-y-4  ">
//           <PrimarySelect
//             label="Poetic form"
//             options={poeticForm}
//             placeholder="Choose your poetic form"
//           />
//           <PrimarySelect
//             label="Rhyme Schemes"
//             options={rhymeSchemes}
//             placeholder="Select rhyme scheme"
//           />
//           <div className=" flex items-center gap-5 h-fit">
//             <label className="flex items-center h-full">Syllable Counts</label>
//             <div className="flex gap-2 w-fit items-center h-7 ">
//               <div className="h-5 aspect-square flex items-center justify-center rounded-sm bg-primary text-primary-foreground">
//                 <Plus size={17} />
//               </div>
//               <div className=" border-b border-border rounded-md h-full flex items-center justify-center px-5 w-full max-w-20">
//                 123
//               </div>
//               <div className=" h-5 aspect-square flex items-center justify-center rounded-sm bg-primary text-primary-foreground">
//                 <Minus size={17} />
//               </div>
//             </div>
//           </div>
//           <div className="space-y-1">
//             <label>Poem Lengths</label>
//             <Tabs
//               value={activeLength}
//               onValueChange={setActiveLength}
//               className="w-full rounded-2xl"
//             >
//               <TabsList className="w-full flex mb-6">
//                 <TabsTrigger
//                   value="short"
//                   isBordered
//                   className="data-[state=active]:bg-white data-[state=active]:text-purple-600 rounded-md"
//                 >
//                   <span className="flex items-center h-full gap-1 text-sm">
//                     Short
//                     <span className="text-sm flex items-center h-full pt-1">
//                       (5-10 Lines)
//                     </span>
//                   </span>
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="medium"
//                   isBordered
//                   className="data-[state=active]:bg-white data-[state=active]:text-purple-600  rounded-md"
//                 >
//                   <span className="flex items-center h-full gap-1 text-sm">
//                     Medium
//                     <span className="text-sm flex items-center h-full pt-1">
//                       (10-30 Lines)
//                     </span>
//                   </span>
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="long"
//                   isBordered
//                   className="data-[state=active]:bg-white data-[state=active]:text-purple-600  rounded-md"
//                 >
//                   <span className="flex items-center h-full gap-1 text-sm">
//                     Long
//                     <span className="text-sm flex items-center h-full pt-1">
//                       (30+ Lines)
//                     </span>
//                   </span>
//                 </TabsTrigger>
//               </TabsList>
//             </Tabs>

//             {/* <PrimarySelect
//                     className="flex-1"
//                     label="Poem Lengths"
//                     options={poemLengths}
//                     placeholder="Decide on poem length"
//                   /> */}
//           </div>

//           {/* <PrimarySelect
//                   className="flex-1"
//                   label="Syllable Counts"
//                   options={syllableCounts}
//                   placeholder="Pick syllable count"
//                 /> */}
//         </TabsContent>

//         <TabsContent value="inspiration" className="space-y-4">
//           <PrimarySelect
//             label="Themes"
//             options={themes}
//             placeholder="Select a theme"
//           />
//           <PrimarySelect
//             label="Topics"
//             options={topics}
//             placeholder="Choose a topic"
//           />
//           <PrimarySelect
//             label="Favorite Poets"
//             options={favoritePoets}
//             placeholder="Draw inspiration from a poet"
//           />
//           <PrimarySelect
//             menuPlacement="top"
//             label="Genres"
//             options={genres}
//             placeholder="Choose a genre"
//           />
//         </TabsContent>

//         <TabsContent value="tools" className="space-y-4">
//           <PrimarySelect
//             label="Creativity Levels"
//             options={creativityLevels}
//             placeholder="Set your creativity level"
//           />
//           <PrimarySelect
//             label="Tones"
//             options={tones}
//             placeholder="Choose the tone"
//           />
//           <PrimarySelect
//             label="Onomatopoeia Words"
//             options={onomatopoeiaWords}
//             placeholder="Add onomatopoeia"
//           />
//           <PrimarySelect
//             label="Emotions Evoked"
//             options={emotionsEvoked}
//             menuPlacement="top"
//             placeholder="Choose emotions to evoke"
//           />
//         </TabsContent>
//       </Tabs>
//     </PrimaryDialog>
//   );
// };

// export default InfoDialog;
import React, {useState} from "react";
import {SingleValue, MultiValue} from "react-select";
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
import {PrimaryDialog} from "../PrimaryDialog";
import {PrimarySelect} from "../PrimarySelect";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "../Tabs";
import {useRouter} from "next/router";
import {FormDataTypes, Option} from "@/types/types";
import {FeatherIcon} from "@/icons/FeatherIcon";
import {BookOpenIcon} from "@/icons/BookOpenIcon";
import {ToolsIcon} from "@/icons/ToolsIcon";
import {Plus} from "@/icons/Plus";
import {Minus} from "@/icons/Minus";

type SelectChangeEvent = SingleValue<Option> | MultiValue<Option>;

type InfoProps = {
  formCurrentData: FormDataTypes;
  setFormCurrentData: React.Dispatch<React.SetStateAction<FormDataTypes>>;
};

const defaultFormData: FormDataTypes = {
  poeticForm: null,
  rhymeScheme: null,
  syllableCount: 0,
  poemLength: "short",
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
  const [activeTab, setActiveTab] = useState("form");

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
    // <PrimaryDialog
    //   isOpen={isDialogOpen}
    //   title={{text: "Poetic Muse"}}
    //   className="h-[600px]"
    //   doneButton={{
    //     onClick: () => {
    //       console.log(formData); // For debugging
    //       // Save formData to your backend or local storage here
    //       setIsDialogOpen(false);
    //     },
    //   }}
    //   cancelButton={{
    //     onClick: () => {
    //       setIsDialogOpen(false);
    //       setFormData({
    //         poeticForm: null,
    //         rhymeScheme: null,
    //         syllableCount: 0,
    //         poemLength: "short",
    //         theme: null,
    //         topic: null,
    //         favoritePoet: null,
    //         genre: null,
    //         creativityLevel: null,
    //         tone: null,
    //         onomatopoeiaWord: null,
    //         emotionEvoked: null,
    //       });
    //     },
    //   }}
    // >
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full rounded-2xl"
    >
      <TabsList className="w-full flex mb-6">
        <TabsTrigger
          value="form"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <span className="flex items-center">
            <FeatherIcon className="md:mr-2 mr-1" />
            Form
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="inspiration"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <span className="flex items-center">
            <BookOpenIcon className="md:mr-2 mr-1" />
            Inspiration
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="tools"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <span className="flex items-center">
            <ToolsIcon className="md:mr-2 mr-1" />
            Tools
          </span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="form" className="space-y-4">
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
                handleChange("syllableCount", formCurrentData.syllableCount + 1)
              }
            >
              <Plus size={17} />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label>Poem Lengths</label>
          <Tabs
            value={formCurrentData.poemLength}
            onValueChange={(value: string) => handleChange("poemLength", value)}
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
      </TabsContent>

      <TabsContent value="inspiration" className="space-y-4">
        <PrimarySelect
          label="Themes"
          options={themes}
          placeholder="Select a theme"
          value={formCurrentData.theme}
          onChange={(value: SelectChangeEvent) => handleChange("theme", value)}
        />
        <PrimarySelect
          label="Topics"
          options={topics}
          placeholder="Choose a topic"
          value={formCurrentData.topic}
          onChange={(value: SelectChangeEvent) => handleChange("topic", value)}
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
          onChange={(value: SelectChangeEvent) => handleChange("genre", value)}
        />
      </TabsContent>

      <TabsContent value="tools" className="space-y-4">
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
      </TabsContent>
    </Tabs>
    // </PrimaryDialog>
  );
};

export default InfoDialog;
