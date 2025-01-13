import {
  ChevronDown,
  CircleEllipsis,
  Columns3,
  GalleryThumbnails,
  LayoutDashboardIcon,
  LayoutGrid,
  List,
  Share,
  TagIcon,
} from "lucide-react";
import React from "react";

const UserButtons = () => {
  return (
    <div className="space-x-10 md:flex items-center text-gray-400 hidden">
      <div className="flex text-gray-400 gap-2 place-items-center">
        <LayoutGrid size={17} />
        <div className="border-r h-4 border-gray-700" />
        <List size={17} />
        <div className="border-r h-4 border-gray-700" />
        <Columns3 size={17} />
        <div className="border-r h-4 border-gray-700" />
        <GalleryThumbnails size={17} />
      </div>

      <div className="flex text-gray-400 gap-4 place-items-center">
        <div className="flex items-center">
          <LayoutDashboardIcon size={17} />
          <ChevronDown size={15} />
        </div>
        <Share size={17} />
        <TagIcon size={17} style={{ transform: "scaleX(-1)" }} />
        <div className="flex items-center">
          <CircleEllipsis size={17} />
          <ChevronDown size={15} />
        </div>
      </div>
    </div>
  );
};

export default UserButtons;
