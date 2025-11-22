---
description: How to install Git on Windows
---

# Installing Git on Windows

Git is required to version control your code and push it to GitHub.

1.  **Download the Installer**:
    *   Go to the official Git website: [https://git-scm.com/download/win](https://git-scm.com/download/win)
    *   Click on **"Click here to download"** to get the latest version.

2.  **Run the Installer**:
    *   Double-click the downloaded `.exe` file.
    *   **Important**: You can accept all the default settings by clicking "Next" through all the screens.
    *   Ensure that the option **"Git from the command line and also from 3rd-party software"** is selected (this is usually the default).

3.  **Verify Installation**:
    *   **Close your current terminal** (Command Prompt or PowerShell). This is required for the changes to take effect.
    *   Open a **new** terminal.
    *   Run the command: `git --version`
    *   You should see a version number (e.g., `git version 2.43.0.windows.1`).

4.  **Configure Git (First Time Only)**:
    *   Run the following commands in your terminal, replacing the name and email with your own:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    ```
