import { NodeProps, Handle, Position } from "reactflow";

export default function Start(props: NodeProps) {
  props.data
  return (
    <div className="w-[120px] h-[120px] bg-blue-300 border-2 border-zinc-800 rounded-full">
      <h1 className="text-center mt-8 font-bold text-[30px]">
          Início
      </h1>
      {/* <Handle 
        id='left' type="target" position={Position.Left}
        className="-left-5 w-3 h-3 border-2 bg-blue-400/80"
      /> */}
      <Handle 
        id="right" type="source" position={Position.Right}
        className="-right-5 w-3 h-3 border-2 bg-blue-400/80"
      />
      
    </div>
  )

}