@echo off
title Push to GitHub - Pratik Modi 3D Portfolio
echo ========================================================
echo   Pushing Pratik Modi 3D Portfolio to a New Branch
echo   Repository: https://github.com/PratikModi22/PratikModi22.github.io.git
echo   Branch:     portfolio-3d
echo   (Your existing code on main will remain 100%% untouched!)
echo ========================================================
echo.

:: 1. Set the remote URL to Pratik's repository
echo [1/4] Setting remote URL to PratikModi22.github.io.git...
git remote set-url origin https://github.com/PratikModi22/PratikModi22.github.io.git

:: 2. Create clean orphan branch with no previous template commit history
echo [2/4] Switching to clean 'portfolio-3d' branch...
git checkout --orphan portfolio-3d 2>nul || git checkout -B portfolio-3d

:: 3. Stage all files
echo [3/4] Staging files...
git add -A

:: 4. Commit
git commit -m "feat: Add interactive 3D isometric room portfolio for Pratik Modi"

:: 5. Push to GitHub
echo.
echo [4/4] Pushing to GitHub on branch 'portfolio-3d'...
git push -u origin portfolio-3d

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   SUCCESS! Pushed to GitHub on branch 'portfolio-3d'.
    echo   Your main branch and existing code were NOT touched!
    echo.
    echo   Branch link:
    echo   https://github.com/PratikModi22/PratikModi22.github.io/tree/portfolio-3d
    echo.
    echo   To deploy this branch to GitHub Pages:
    echo   1. Go to: https://github.com/PratikModi22/PratikModi22.github.io/settings/pages
    echo   2. Under 'Build and deployment' -^> 'Branch':
    echo      Select 'portfolio-3d' and '/ (root)'
    echo   3. Click Save
    echo   Your website will be live at:
    echo   https://pratikmodi22.github.io/
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   Git push encountered an authentication requirement.
    echo   If GitHub Credential Manager opens, sign in with your
    echo   GitHub account (PratikModi22).
    echo ========================================================
)

pause
