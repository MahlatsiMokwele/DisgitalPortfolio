import fs from "fs";
import inquirer from "inquirer";

const promptUser = async () => {
  return await inquirer.prompt([
    { name: "projectName", message: "Project name:" },
    { name: "description", message: "Short description of your project:" },
    {
      name: "techStack",
      message: "List your frameworks/technologies used (comma-separated):",
    },
    { name: "license", message: "License (e.g. MIT, Apache 2.0, GPL):" },
    {
      name: "envVars",
      message:
        "Enter required .env variables (key=value, separated by commas):",
    },
    { name: "docker", message: "Is the project Dockerized? (yes/no)" },
    { name: "startupCmd", message: "Startup command(s):" },
    { name: "dbSetup", message: "Describe any database setup steps:" },
    {
      name: "troubleshooting",
      message: "Mention common issues & solutions (optional):",
    },
    { name: "contribution", message: "How can others contribute?" },
  ]);
};

const generateMarkdown = ({
  projectName,
  description,
  techStack,
  license,
  envVars,
  docker,
  startupCmd,
  dbSetup,
  troubleshooting,
  contribution,
}) => {
  const techList = techStack
    .split(",")
    .map((t) => `- **${t.trim()}**`)
    .join("\n");

  const envBlock = envVars
    .split(",")
    .map((v) => v.trim())
    .join("\n");

  return `# ${projectName} Documentation

## 📖 **About**

${description}

---

## 🛠 **Frameworks & Tools Used**

${techList}

---

## 📜 **License**

This project is licensed under the **${license}** license.

---

## 🚀 **Getting Started**

### **Environment Variables**

Create a \`.env\` file in the root directory with the following variables:

\`\`\`env
${envBlock}
\`\`\`

### ${
    docker.toLowerCase() === "yes"
      ? "Docker Configuration"
      : "Startup Instructions"
  }

${
  docker.toLowerCase() === "yes"
    ? `
Make sure Docker is installed and running. To start the application:

\`\`\`bash
${startupCmd}
\`\`\`
`
    : `
To start the application, run:

\`\`\`bash
${startupCmd}
\`\`\`
`
}

### Database Configuration

${dbSetup}

---

### 💡 **Troubleshooting**

${troubleshooting || "N/A"}

---

### 🤝 **Contributing**

${contribution}

---
`;
};

(async () => {
  const answers = await promptUser();
  const markdown = generateMarkdown(answers);
  fs.writeFileSync("README.md", markdown);
  console.log("✅ README.md generated successfully.");
})();
