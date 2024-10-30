import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen p-12 bg-[#F5F5F5]">
      <div>
        <h1 className="text-lg font-bold">UI KIT - Demo</h1>
        <hr />
      </div>

      <div className="flex flex-col gap-2">
        <h1>Buttons</h1>

        <div className="flex gap-4">
          <Button size="sm">
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
          <Button>
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
          <Button size="lg">
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="sm" variant="secondary">
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
          <Button variant="secondary">
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
          <Button size="lg" variant="secondary">
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="sm" variant="danger">
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
          <Button variant="danger">
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
          <Button size="lg" variant="danger">
            <PlusIcon />
            Click me
            <PlusIcon />
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="sm">
            <PlusIcon />
          </Button>
          <Button>
            <PlusIcon />
          </Button>
          <Button size="lg">
            <PlusIcon />
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="sm" variant="secondary">
            <PlusIcon />
          </Button>
          <Button variant="secondary">
            <PlusIcon />
          </Button>
          <Button size="lg" variant="secondary">
            <PlusIcon />
          </Button>
        </div>

        <div className="flex gap-4">
          <Button size="sm" variant="danger">
            <PlusIcon />
          </Button>
          <Button variant="danger">
            <PlusIcon />
          </Button>
          <Button size="lg" variant="danger">
            <PlusIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
