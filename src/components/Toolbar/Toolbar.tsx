import * as ToolbarRadix from "@radix-ui/react-toolbar"

type ToolbarProps = {
  onClickSquare: VoidFunction,
}

const Toolbar = ({onClickSquare }: ToolbarProps) => {
  return(
    <ToolbarRadix.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-visible'>
      <ToolbarRadix.Button 
        className='flex flex-col w-[90px] h-20 bg-zinc-300 rounded-xl border-[1px] border-blue-600 transition-transform hover:-translate-y-5'
        onClick={onClickSquare} 
      >
        <div className='w-full h-10 border-b-[1px] border-blue-600 ' />
        <div className='w-full h-5 border-b-[1px] border-blue-600 ' />
      </ToolbarRadix.Button>
    </ToolbarRadix.Root>
  )

}

export default Toolbar