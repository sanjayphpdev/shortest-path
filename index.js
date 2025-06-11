const fs = require("fs");
const { DOMParser } = require("xmldom");

// Step 1: Read XML file
const xmlString = fs.readFileSync("example.xml", "utf-8");

// Step 2: Parse XML to DOM
const xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");

// Step 3: Extract entities
const entities = {};
const classNodes = xmlDoc.getElementsByTagName("class");

for (let i = 0; i < classNodes.length; i++) {
  const classKey = classNodes[i].getAttribute("key");
  const entityNodes = classNodes[i].getElementsByTagName("entity");

  for (let j = 0; j < entityNodes.length; j++) {
    const entityKey = entityNodes[j].getAttribute("key");
    entities[entityKey] = { class: classKey };
  }
}

// Step 4: Build graph (associations)
const graph = {};
Object.keys(entities).forEach((key) => (graph[key] = []));

const associationNodes = xmlDoc.getElementsByTagName("association");

for (let i = 0; i < associationNodes.length; i++) {
  const primary = associationNodes[i].getAttribute("primary");
  const secondary = associationNodes[i].getAttribute("secondary");

  if (graph[primary]) {
    graph[primary].push(secondary);
  }
}

// Step 5: Shortest Path (BFS)
function shortestPath(graph, start, end) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === end) return path;

    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node] || []) {
        queue.push([...path, neighbor]);
      }
    }
  }
  return null;
}

// Step 6: Run example query
const from = "T/2345";
const to = "M60";
const path = shortestPath(graph, from, to);

/*
console.log("Entities:", entities);
console.log("Graph:", graph);
console.log(`Shortest path from ${from} to ${to}:`, path || "No path found");
*/
if (path) {
  const detailedPath = path.map((key) => ({
    key,
    class: entities[key]?.class || "Unknown",
  }));

  console.log("Shortest path with details:");
  console.table(detailedPath);
} else {
  console.log(`No path found from ${from} to ${to}`);
}
