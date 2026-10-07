# Spec 001: Lesson Notes

## Problem
- This space should optimize consolidation of content/notes into topics as I take notes in a physical notebook. 

## User stories
- As a student, I want to record what I learned in a lesson so that I can review it later
- As a student, I want to have an organized space to find/practice specif topics learned in lessons

## Requirements
- (what the feature must do, as short bullet points)
- Title (required)
- Topic (required)
- Date (defaults to today)
- Lesson content
- Homework section
- What to focus on field


## Data model
(What fields does one lesson note have? What type is each?)
- Topics: voicing, scales, intervals, etc (one topic can have many notes) 
- Lesson content: free form
- Homework: title box, date, Free text form - all editible 
- What to focus on filed: free text form  
- All these fileds are not required except for topic


## Acceptance criteria
- Given a note with a title "voicing" when I delete it, then it no longer appears in the list and a search for "voicing" returns nothing
- Given a list of content "title" when I select it/double click it, then it loads that title + it's contents


## Out of scope (for now)
- future features 
- freeform text box (text bar, bullet point, bold, italic, etc)
- topic pane with the ability to add/remove topic 
- Topic examples; voicing, intervals, scales, etc
- Song library, place to hold a collection of songs + chords 
- Chords library, same as above. I would need a keyboard design where I can highlight notes that form a specifc chord
- search bar, search content, songs, and future features 
- feature to transpose chords into sight sheet 