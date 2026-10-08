# Spec 001: Lesson Notes

## Problem
- I take notes in a physical notebook during my biweekly piano lessons. Finding what I learned about a specific topic means flipping through pages. This app stores lesson notes organized by topic so I can find and review them quickly.


## User stories
- As a student, I want to record what I learned in a lesson so that I can review it later.
- As a student, I want my notes organized by topic so that I can find and practice a specific topic.
- As a student, I want to edit or delete a note so that I can fix mistakes.


## Requirements
- Create, view, edit, and delete a lesson note.
- View a list of all notes, and open one to see its full contents.
- Create a new topic, and assign exactly one topic to each note.
- Notes persist between app sessions.


## Data model
**Note**
| Field | Type | Required | Notes |
|---|---|---|---|
| title | text | yes | |
| topic | reference to a Topic | yes | each note has exactly one |
| date | date | no | defaults to today |
| content | text | no | plain text |
| homework | text | no | free text, no due date |
| focus | text | no | "what to focus on", free text |

**Topic**
| Field | Type | Required | Notes |
|---|---|---|---|
| name | text | yes | e.g. voicing, scales, intervals; one topic can have many notes |


## Acceptance criteria
- Given a note titled "Voicing basics", when I delete it, then it no longer appears in the list.
- Given a list of notes, when I select a note, then its title and all its fields are shown.
- Given a note form with no topic, when I try to save, then it is rejected with a message.
- Given a note form with no title, when I try to save, then it is rejected with a message.
- Given I created a note, when I close and reopen the app, then the note is still there.
- Given an existing note, when I change its title and save, then the list shows the new title.



## Out of scope (for now)
- Rich text formatting (bold, italic, bullets); content is plain text
- Renaming or deleting topics
- Search and filtering
- Song library (songs with lyrics and chords)
- Chord library and keyboard visual
- Transposing chords and sight-reading format