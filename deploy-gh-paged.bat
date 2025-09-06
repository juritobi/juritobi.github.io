@echo off
REM Hides commands from being printed in the console, keeps output clean

setlocal enabledelayedexpansion
REM Enables delayed environment variable expansion (for advanced use; not directly needed here, but harmless)

REM --- Store current project folder and current Git branch ---
set PROJECT_DIR=%cd%
REM Saves the current directory path in PROJECT_DIR

for /f %%b in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%b
REM Uses Git to find the current branch name (e.g., "main") and saves it in CURRENT_BRANCH

REM --- Create a temporary directory for building deployment files ---
set TEMP_DIR=%TEMP%\gh-pages-build
REM Defines the path for a temporary folder in the system temp folder

rmdir /s /q "%TEMP_DIR%" 2>nul
REM Deletes the temp folder if it already exists (quietly)

mkdir "%TEMP_DIR%"
REM Creates a clean new temp folder for deployment

echo Building Vue project...
call npm run build || goto :error
REM Runs the Vue build command. If it fails, jumps to the :error label

echo Copying files...
xcopy /E /I /Y dist\* "%TEMP_DIR%\"
REM Copies all files from Vue's `dist` folder to the temp folder (recursively, force overwrite)
xcopy /E /I /Y WouldYouRatherGame "%TEMP_DIR%\SocialGames"
REM Copies the custom `game` folder into the temp folder as a subfolder called "game"

cd "%TEMP_DIR%"
REM Moves into the temporary folder (now contains built site content)

REM --- Prepare Git for deployment ---
git init
REM Initializes a new Git repository

git remote add origin git@github.com:juritobi/juritobi.github.io.git 2>nul
REM Adds your GitHub repo as a remote (SSH version). `2>nul` hides the error if it already exists

echo Switching to gh-pages branch...
git checkout -b gh-pages
REM Creates and switches to a new branch called `gh-pages`

echo juritobi.com > CNAME
REM Allowing the custom domain to redirect to github pages

echo Committing changes...
git add .
REM Adds all files in the temp folder to Git

git commit -m "Deploy from %CURRENT_BRANCH% at %DATE% %TIME%"
REM Commits the changes with a timestamped message

echo Pushing to GitHub...
git push origin gh-pages --force
REM Pushes the gh-pages branch to GitHub, overwriting existing content

cd "%PROJECT_DIR%"
REM Returns to your original project directory

echo Deployment complete!
pause
REM Shows a "Press any key" message before closing the window

exit /b
REM Exits the script cleanly

:error
echo Build failed. Aborting deployment.
pause
exit /b 1
REM If the build failed earlier, this section gets called