# art-scene-generator

Project view component Content to Display:
Project Information:
Project name (project)
Song information (song)
Video idea (video_idea)
Scene Prompts:
Direction of photography (direction_photography):
Foreground and background scenery
Lighting and mood
Overall visual layout and composition
Perspective
Image generation prompt (image_generation_prompt)
Scene description (scene)
Scenes:
Description
Duration
Name
Timeslot
Scene description
Style Information:
Art direction (art_direction)
Art style (art_style)
General mood (general_mood)
Motifs
Sub-components:
ScenePromptComponent:
Props: direction_photography, image_generation_prompt, scene
Displays direction of photography details, image generation prompt, and scene description.
SceneComponent:
Props: Description, Duration, Name, Timeslot, description
Displays scene details.
Functionality:
Rendering Project Information:
Render project name, song information, and video idea.
Rendering Scene Prompts:
Map through the array of scene prompts and render each using the ScenePromptComponent.
Rendering Scenes:
Map through the array of scenes and render each using the SceneComponent.
Rendering Style Information:
Render art direction, art style, general mood, and motifs.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/art-scene-generator.git
cd art-scene-generator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
