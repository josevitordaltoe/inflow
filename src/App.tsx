import { useCallback } from 'react';
import ReactFlow, { Background, Connection, Controls, addEdge, useEdgesState, useNodesState } from 'reactflow';
import * as Toolbar from "@radix-ui/react-toolbar"

import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors'

import Square from './components/nodes/Square';
import DefaultEdge from './components/edges/DefaultEdge';
import Start from './components/nodes/Start';
import End from './components/nodes/End';

const NODE_TYPES = {
  square: Square,
  start: Start,
  end: End,
}

const EDGE_TYPES = {
  default: DefaultEdge
}


const initialNodes = [
  { id: '1', type: 'start',position: { x: 200, y: 400 }, data: { label: '1' } },
  { id: '2', type: 'square',position: { x: 500, y: 360 }, data: { label: '1' } },
  { id: '99', type: 'end',position: { x: 1200, y: 400 }, data: { label: '1' } },

];


const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {

  const [edges, setEdges, onEdgesChange ] = useEdgesState(initialEdges)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)

  const onConect  = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges) )
  }, [])

  const addSquareNode = () => {
    setNodes(nodes => [
      ...nodes,
      { id: crypto.randomUUID(), type: 'square',position: { x: 1200, y: 400 }, data: { label: '1' } },
    ])

  }

  return (
    <div>
      <div className='w-screen h-screen'>
        <ReactFlow 
          nodeTypes={NODE_TYPES} 
          nodes={nodes} 
          onNodesChange={onNodesChange} 
          edges={edges} 
          onEdgesChange={onEdgesChange} 
          edgeTypes={EDGE_TYPES} 
          onConnect={onConect}
          defaultEdgeOptions={{
            type: 'default'
          }}
        >
          <Background
          gap={20}
          size={0}
          color={zinc[200]} />
          <Controls />
        </ReactFlow>
        <Toolbar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-visible'>
          <Toolbar.Button 
            className='w-20 h-20 bg-zinc-600 rounded-xl transition-transform hover:-translate-y-5'
            onClick={addSquareNode} 
          />
        </Toolbar.Root>
      </div>
    </div>
  );
}