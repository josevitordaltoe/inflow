import { NodeProps, Handle, Position, NodeResizer } from "reactflow";

type SquareProps = NodeProps & {
  data?: {
    label?: string,
    what?: string,
    who?: string,
    where?: string,
  }  

}

export default function Square(props: SquareProps) {
  return (
    <div className="flex flex-col overflow-hidden bg-zinc-300 border-2 border-blue-800 w-full min-w-[200px] max-w-[400px] h-[200px] rounded-[20px]">
      <div className="w-full h-[110px] border-b-2 border-blue-800 p-2">
        {props.data.what}
      </div>
      <div className="w-full h-[45px] border-b-2 border-blue-800 text-center p-2">
      {props.data.who}
      </div>
      <div className="w-full text-center p-2">
        {props.data.where}
      </div>
      <NodeResizer
        minWidth={200}
        maxWidth={400}
        minHeight={200}
        maxHeight={200}
        isVisible={true}
        lineClassName="border-transparent rounded-xl"
        handleClassName="h-5 w-5 bg-transparent border-2 rounded border-transparent "
      />
      <Handle 
        id='left' type="target" position={Position.Left}
        className="-left-5 w-3 h-3 border-2 bg-blue-400/80"
      />
      <Handle 
        id="right" type="source" position={Position.Right}
        className="-right-5 w-3 h-3 border-2 bg-blue-400/80 hover:w-5 hover:h-5 hover:-right-6 hover:bg-blue-500 hover:transition"
      />
      
    </div>
  )

}