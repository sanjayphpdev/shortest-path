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
After running the project, the console will output the names and classifications of all nodes encountered when traversing the shortest path.

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
 ##  Author
```
Sanjay Yadav
GitHub: @sanjayphpdev
```
## What is left out
1. Real XML Upload Flow
	- Currently, the XML is read from a local file. Upload via a web interface is not implemented.
2. File Validation.
	- No checks are performed to ensure the uploaded file is a valid XML or matches the expected schema.
3. Data Validation.
	- There is no verification for things like duplicate entities.
4. Dynamic parameter for primary and secondary nodes.
	- Start and end nodes are hardcoded. Dynamic selection through CLI, API, or UI is not implemented yet.
5. Authentication is missing to access this application.
	- The application is accessible without any login or role-based access control.

## What more we can able to do with more time and scope.
- Can find levels of connection between two nodes. eg : 1st , 2nd, 3rd
- We can store the xml entities data and there relationship into database for advanced querying and auditing. eg : MySQL.
- We can also read and parse remote xml file eg : S3 Bucket, URL
- Analytics & Reports (Downloadable & Graphical & Dashboard & Animated)
- Make it a CLI Tool accepting --filePath , --from and --to nodes params.
- Unit testing.
- Dockerize this application.
