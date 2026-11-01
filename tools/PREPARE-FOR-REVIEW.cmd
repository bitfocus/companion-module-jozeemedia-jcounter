@echo off
setlocal
cd /d "%~dp0.."
echo.
echo J-COUNTER Companion v3.0.1 - review fixes

echo Checking Node.js version (Node 22.20+ required)...
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed. Install Node.js 22 LTS (22.20 or newer).
  exit /b 1
)
node -v
where corepack >nul 2>nul
if errorlevel 1 (
  echo ERROR: Corepack is missing. Install Corepack with: npm install -g corepack
  exit /b 1
)
echo.
echo Installing dependencies using Yarn 4 (creates a fresh yarn.lock)...
call corepack enable
if errorlevel 1 goto fail
call corepack yarn install
if errorlevel 1 goto fail

echo.
echo Running logic tests...
call corepack yarn test
if errorlevel 1 goto fail

echo.
echo Building module package...
call corepack yarn package
if errorlevel 1 goto fail

echo.
echo SUCCESS. Commit the generated yarn.lock together with the other changed files.
echo Do not reuse the old Yarn 1 lockfile.
exit /b 0
:fail
echo FAILED. Do not submit a new Bitfocus version until this step succeeds.
exit /b 1
