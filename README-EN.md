# Git Commitzen Guide

This repository was created to introduce and practice the use of the **Commitizen** tool for standardizing commits in Git projects. It includes practical tasks to help participants explore the concepts and functionalities of the tool.

## Getting Started

1. **Fork the repository to your profile**  
   - Click the "Fork" button at the top right of this page.  

2. **Clone the forked repository**  
   - Go to your fork and copy the repository URL.  
   - In the terminal, run the command:  

```bash
   git clone <REPOSITORY_URL>
```

3. **Navigate to the project directory**  

```bash
   cd Git-Commitzen-Guide
```

4. **Install dependencies**  

```bash
   npm install
```

5. **Start the project**  

```bash
   npm run dev
```

---

## Using Commitizen

**Commitizen** makes it easier to standardize commits following conventions. To use it in the repository:  

1. Ensure you are in the project’s root directory.  
2. Run the following command to start Commitizen’s interactive wizard:  

```bash
   cz commit
```

> **Note**: If Commitizen is not yet configured in your environment, use the [PS-Commitzen-Setup](https://github.com/strFelix/PS-Commitzen-Setup) repository to complete the initial setup.  

### Commit Flow Using `cz commit`:  
1. Choose the type of commit (e.g., feat, fix, etc.).  
2. Enter the scope of the change (optional).  
3. Provide a short and clear description of the commit (optional).  
4. Specify if the change is a `BREAKING CHANGE` (press Enter to skip).  
5. Confirm the commit.  

> **Tip**: Read each step of the wizard carefully to ensure your commits are consistent and informative.  

---

## Tasks

1. Use **Commitizen** (`cz commit`) to commit the following tasks individually:  
   1.1. Use the **correct tags** for each type of change.  
   1.2. Add **scopes** and descriptions (optional).  

### Task List:
- [ ] Properly indent the code and remove debug lines and unnecessary comments.  
- [ ] Add a submit button on the registration screen and link it to the `sendForm()` function.  
- [ ] Check and fix the page redirection after form submission.  
- [ ] Componentize the submit button for reuse in other parts of the project.  

2. Update the project documentation by marking completed tasks with [X], following the described standards.  

---

## Pull Request (PR)

1. After completing the tasks and creating commits, push the changes to GitHub.  
2. Open a **Pull Request (PR)** to the correct branch in the original repository.  
   - Make sure to clearly describe the changes in the PR.  

---

If you need help or encounter any issues, feel free to open an **Issue** in this repository!
