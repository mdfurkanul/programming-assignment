# programming-assignment

Programming assignment: Robot programming

---

## Documentation

- [View anylysis (PDF)](https://github.com/mdfurkanul/programming-assignment/blob/main/Problem%20Analysis.pdf)

## Requirements

### For Local Development:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (v8 or later)

### For Docker:

- [Docker](https://www.docker.com/) (v20.10 or later)

---

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/mdfurkanul/programming-assignment.git
   cd programming-assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development:
   ```bash
   npm run dev
   ```
4. Run test(vitest):
   ```bash
   npm run test
   ```
5. Build project:
   ```bash
   npm run build
   ```
6. Run the project:
   ```bash
   npm run start
   ```

## Running Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/mdfurkanul/programming-assignment.git
   cd programming-assignment
   ```
2. Docker build:

   ```bash
   docker build -t programming-assignment .
   ```

3. Docker Run:
   ```bash
   docker run programming-assignment
   ```
