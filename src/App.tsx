import { useCallback } from 'react';
import ReactFlow, { Background, Connection, Controls, MiniMap, Node, addEdge, useEdgesState, useNodesState } from 'reactflow';


import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors'

import Square from './components/nodes/Square';
import DefaultEdge from './components/edges/DefaultEdge';
import Start from './components/nodes/Start';
import End from './components/nodes/End';
import Toolbar from './components/Toolbar/Toolbar';

const NODE_TYPES = {
  square: Square,
  start: Start,
  end: End,
}

const EDGE_TYPES = {
  default: DefaultEdge
}


const initialNodes: Node[] = [
  { id: '1', type: 'start',position: { x: 100, y: 400 }, data: {label: '1'} },
  { id: '2', type: 'square',position: { x: 500, y: 360 }, data: { what: 'Abrir/ Lançar um pedido de vendas interno. Inserir o produto ou serviço. Indicar no campo "Studio" se o departamento de Studio é elegível ao recebimento da comissão', who: 'Departamento Comercial', where: 'Consystec' } },
  { id: '99', type: 'end',position: { x: 1500, y: 400 }, data: { label: '1' } },

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
      { id: crypto.randomUUID(), type: 'square',position: { x: 1200, y: 400 }, data: { what: 'O que deve ser Feito', who: 'Departamento', where: 'Ferramenta / Método' } },
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
          <MiniMap />
        </ReactFlow>
        <Toolbar onClickSquare={addSquareNode} />
      </div>
    </div>
  );
}