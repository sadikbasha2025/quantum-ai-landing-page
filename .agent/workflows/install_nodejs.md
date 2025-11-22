---
description: How to install Node.js on Windows
---

# Installing Node.js on Windows

Node.js is required to run modern web development tools like Vite and React.

1.  **Download the Installer**:
    *   Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
    *   Download the **LTS (Long Term Support)** version (recommended for most users).

2.  **Run the Installer**:
    *   Double-click the downloaded `.msi` file.
    *   Follow the installation prompts.
    *   **IMPORTANT**: Ensure the option **"Add to PATH"** is selected (it usually is by default).

3.  **Verify Installation**:
    *   Open a **new** command prompt or PowerShell window (close any existing ones).
    *   Run the command: `node -v`
    *   You should see a version number (e.g., `v20.11.0`).
    *   Run the command: `npm -v`
    *   You should see a version number for npm.

4.  **Restart Your Terminal**:
    *   If you had VS Code or a terminal open during installation, restart it to pick up the new PATH changes.
