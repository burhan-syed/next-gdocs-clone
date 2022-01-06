import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import RowOptions from "./RowOptions";


const DocumentRow = ({ doc, id, date, filename }) => {
  const router = useRouter();
  
  return (
    <div onClick={() => router.push(`/doc/${id}`)} className="flex items-center p-4 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100">
      
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow w-10 pl-5 pr-10 truncate">{filename}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>

      {/* <Button onClick={e => e.stopPropagation()} color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="border-0">
        <Icon name="more_vert" size="3xl" ></Icon>
      </Button> */}
      <div onClick={e => e.stopPropagation()} className=""><RowOptions id={id} filename={filename}/></div>
      
    </div>
  );
};

export default DocumentRow;
