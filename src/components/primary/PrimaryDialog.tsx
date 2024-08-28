import React from "react";
import Select, {Props as SelectProps} from "react-select";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  variant?: "outlined" | "contained";
  isLoading?: boolean;
  color?: string;
};

export type PrimaryDropDownProps = SelectProps & {
  label?: string;
  title?: {text?: string; className?: string};
  children?: React.ReactNode;
  isOpen?: boolean;
  doneButton?: ButtonProps;
  cancelButton?: ButtonProps;
  isContentPadding?: boolean;
  className?: string;
  minHeight?: string;
  minWidth?: string;
};

const PrimaryDialog = ({
  label,
  title,
  doneButton,
  cancelButton,
  isContentPadding = false,
  minHeight = "auto",
  minWidth = "auto",
  isOpen,
  children,
  className,
  ...restProps
}: PrimaryDropDownProps) => {
  const id = React.useId();
  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div
          className="w-full h-full bg-backdrop  fixed top-0 left-0 flex items-center justify-center z-50"
          onClick={(e) => {
            e.stopPropagation();
            cancelButton?.onClick?.();
          }}
        >
          <div
            className={`bg-background min-w-[500px] w-full max-w-[700px]  rounded-lg overflow-hidden max-h-[80vh] flex flex-col ${className}`}
            onClick={(e) => e.stopPropagation()}
            style={{minHeight: minHeight, minWidth: minWidth}}
          >
            <div
              className={` p-5  text-2xl font-bold bg-background font-styrene ${title?.className}`}
            >
              {title?.text}
            </div>
            <div
              className={`flex flex-col gap-5 overflow-auto flex-grow px-5 pb-5 bg-background`}
            >
              {children}
            </div>
            <div className="flex justify-end p-3 border-t border-border w-full bg-background">
              <div className="flex gap-5">
                <button
                  className="border rounded-md px-3 py-2"
                  title={cancelButton?.text || "Cancel"}
                  onClick={(e) => {
                    e.stopPropagation();
                    cancelButton?.onClick?.();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="rounded-md px-3 py-2 bg-primary text-primary-foreground"
                  style={{maxHeight: "40px"}}
                  title={doneButton?.text || "Done"}
                  onClick={(e) => {
                    e.stopPropagation();
                    doneButton?.onClick?.();
                  }}
                  color={doneButton?.color}
                >
                  Publish Poem
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PrimaryDialog.displayName = "PrimaryDialog";

export {PrimaryDialog};
// import "./CustomDialog.css";
// import {SimpleButton} from "components/Buttons/SimpleButton";

// export const CustomDialog = ({
//   title,
//   children,
//   isOpen,
//   doneButton,
//   cancelButton,
//   isContentPadding = false,
//   className,
//   minHeight = "auto",
//   minWidth = "auto",
// }) => {
//   if (!isOpen) return null;

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="dialogBackdrop"
//           onClick={(e) => {
//             e.stopPropagation();
//             cancelButton?.onClick();
//           }}
//         >
//           {/* Alert : Avoid OutsideClickHandler due to conflicts with open drawer and dialog. */}
//           <div
//             className={`dialogWrapper ${className}`}
//             onClick={(e) => e.stopPropagation()}
//             style={{minHeight: minHeight, minWidth: minWidth}}
//           >
//             <div className={`dialogTitle ${title?.className}`}>
//               {title?.text}
//             </div>
//             <div
//               className={`dialogContent ${
//                 isContentPadding && "contentPadding"
//               }`}
//             >
//               {children}
//             </div>
//             <div className="dialogBottomSection">
//               <div className="flexRow">
//                 <SimpleButton
//                   title={cancelButton?.text || "Cancel"}
//                   margin={12}
//                   click={(e) => {
//                     e.stopPropagation();
//                     cancelButton?.onClick();
//                   }}
//                   variant={cancelButton?.variant ?? "outlined"}
//                 />
//                 <SimpleButton
//                   style={{maxHeight: "40px"}}
//                   margin={12}
//                   loader={doneButton?.isLoading}
//                   title={doneButton?.text || "Done"}
//                   click={(e) => {
//                     e.stopPropagation();
//                     doneButton?.onClick();
//                   }}
//                   variant={doneButton?.variant ?? "contained"}
//                   color={doneButton?.color}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
