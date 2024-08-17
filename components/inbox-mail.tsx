import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const InboxMail = () => {
  return (
    <Button variant="outline" className="h-36">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <p>Jack Martin</p>
          <p>10 months ago</p>
        </div>
        <p className="text-left text-xs">Meeting tomorrow</p>
        <p className="text-wrap line-clamp-2 text-xs font-light text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus
          nihil dolorem optio nostrum iusto, quasi illum suscipit, inventore
          voluptatibus tenetur debitis quisquam molestiae, quis explicabo nam
          veritatis mollitia labore.
        </p>
        <div className="flex flex-row justify-start gap-4">
          <Badge variant="secondary">meeting</Badge>
          <Badge>work</Badge>
          <Badge>important</Badge>
        </div>
      </div>
    </Button>
  );
};

export default InboxMail;
