# Shortest Path POC

This project demonstrates parsing a custom XML topology to build a directed graph and compute the **shortest path** between two entities using Node.js.

---

## Features

- XML parsing based on a custom XSD schema
- Entity classification and association mapping
- Directed graph construction
- Shortest path computation using Breadth-First Search (BFS)

---
## Getting Started
---
Follow these steps to clone, install, and run the project locally.
### 1. Clone the Repository
```bash
git clone https://github.com/sanjayphpdev/shortest-path
```
### 2. Navigate to the Project Directory
```bash
cd shortest-path
```
### 3. Install Dependencies
```bash
npm install
```
### 4. Run the POC
```bash
npm run dev
```
---

## Usage
After running the project, the console will output:
1. Parsed entities and associations
2. Constructed graph
3. Shortest path from a from node to a to node

---

## Customization
To test different nodes for the shortest path:
1. Open index.js
2. Modify the following lines:
```
const from = "X7898980";
const to = "T/2345";
```
3. Save and re-run the project:
```bash
npm run dev
```

---

## XML File Format for data input
Refer attached sample within root directory (example.xml)

---
## Notes
- This is a simple proof-of-concept.
- Associations are unidirectional (from primary to secondary).
- Entities must have unique keys across all classes.
---
👨‍💻 Author
```
Sanjay Yadav
GitHub: @sanjayphpdev
```
