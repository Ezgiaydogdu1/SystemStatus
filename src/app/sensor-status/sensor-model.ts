interface NodeError {
    errorCode: number;
    description: string;
  }
  
  interface NodeStatus {
    value: number;
    component: string;
    timestamp: string;
    unit: string;
    nodeError: NodeError | null;
  }
  
  interface SystemStatus {
    id: string;
    system: string;
    nodeStatus: NodeStatus[];
  }
  
  export { SystemStatus, NodeStatus, NodeError };