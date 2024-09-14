import ArrowIcon from "@/icons/ArrowIcon";
import React, {createContext, useContext, useState} from "react";

type AccordionContextType = {
  expandedItem: string | null;
  setExpandedItem: (value: string | null) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

export const Accordion: React.FC<{
  type: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({type, collapsible = false, className, children}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{expandedItem, setExpandedItem}}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<{
  value: string;
  children: React.ReactNode;
}> = ({value, children}) => {
  return <div data-value={value}>{children}</div>;
};

export const AccordionTrigger: React.FC<{
  children: React.ReactNode;
  value: string;
}> = ({children, value}) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionTrigger must be used within an Accordion");

  const {expandedItem, setExpandedItem} = context;

  const handleClick = () => {
    setExpandedItem(expandedItem === value ? null : value);
  };

  return (
    <div
      onClick={handleClick}
      style={{cursor: "pointer"}}
      className={`group relative group-hover: w-full border-t border-border flex justify-between items-center hover:border-primary  group pb-3 ${expandedItem === value && "w-full border-primary"}`}
    >
      <span
        className={`p-1.5 text-md leading-8 text-text w-[200px]  group-hover:text-primary transition-all duration-500 ${expandedItem === value && "text-primary"}`}
      >
        {children}
      </span>
      <div
        className={`w-[200px] h-0 absolute top-0 left-0 group-hover:h-[44px] transition-all duration-500 ${expandedItem === value && "h-[44px]"}`}
      />
      <div
        className={`text-light rotate-90 group-hover:text-primary  transition-all duration-500 ${expandedItem === value && "text-primary rotate-[-90deg] "}`}
      >
        <ArrowIcon />
      </div>
      {/* {expandedItem === value ? " ▼" : " ▶"} */}
    </div>
  );
};

export const AccordionContent: React.FC<{
  children: React.ReactNode;
  className?: string;
  value: string; // Add this prop
}> = ({children, className, value}) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionContent must be used within an Accordion");

  const {expandedItem} = context;

  if (expandedItem !== value) return null;

  return (
    <div className={`${className} bg-card p-5 rounded-md shadow-sm mb-3`}>
      {children}
    </div>
  );
};
