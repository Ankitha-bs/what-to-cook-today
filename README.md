# What to Cook Today

A small website that helps decide what to cook. Search dishes, filter by meal and veg/non-veg, get a random pick, and save favorites.

*Live demo:* https://ankitha-bs.github.io/what-to-cook-today/

## Problem
Every day at home the question is "what should we cook today?" This site shows 12 home dishes and narrows the choice quickly.

## Features
- Search by dish name
- Meal and diet filters that work together with search
- "Surprise me" picks a random dish from the current filtered list
- Heart button saves favorites in the browser (localStorage), kept after refresh
- "No dish found" message when nothing matches

## Built with
HTML, CSS, JavaScript

## How I built it
The page layout was generated with Google AI Studio. I wrote the JavaScript for search, filters, Surprise me, favorites and the no-results message. I also fixed a bug where Surprise me ignored the filters.

## What I want to improve
- Rebuild it in React
- Load dishes from an API
- Add recipes and an "ingredients I have" filter
