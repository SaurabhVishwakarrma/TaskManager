# Task Manager - A Task Tracker Application

## Description
  So this task tracker is a very basic task tracker which allows these functions with the local storage of browser

  - Add a task
  - Mark a task as complete
  - Delete a task
  - Drag and Drop tasks to reorder (newly added)

  ## Feature that stands out most
   - Even if we close the program then also our task data is not lost
   - local storage of browser is used in this stack for the storage
   - Drag and Drop your tasks according to your needs
   
   

## Technology used
   ###  Language used 
  - HTML 
  - CSS 
   - Javascript

   - Browser Local storage for data handling


## Features Completed
- Add task
- View task list
- Mark task as completed
- Delete task
- Drag and Drop to reorder {newly added }

## How to Run
   ### Basic Requirements
   - latest version of Nodejs should be installed
   - Code Editor like VS-code 
   
   ### Steps to run
    Step 1: Create a specific folder (Optional,if want to have it any other existing folder then also okay)
    Step 2: Open the terminal for that specific folder where the file is present
    Step 3: Use live server to run 
    Step 4: Use the features- Add task,Mark as completed
    Step 5: For marking as complete click on the checkbox in left of the task 
    Step 6: For Deletion of the Task ,click on the Delete Button provided within the corner-left side of the task
    Step 7: For Drag and Drop Feature - Hold on to a task and drag it to your desired place and then drop 

    

## Challenges Faced
    Challenge 1 : Adding the tasks,deleting and marking it complete within the local storage was a little problem so had to make it done
    Challenge 2 : Making the GUI ,as to make it properly so i had to try it multiple combinations

## Improvements Planned
    Improvement 1 ->  using different library of JS for the development and the User Interface
    Improvement 2  ->  add the animations within the Application
    Improvement 3 ->  add deadlines,reminders and priority
    Improvement 4 ->  prioritize tasks based on level of prioritization
    Improvement 5 -> Edit the tasks once created 

## Test-Cases Tested
- Drag the first task to the last position.
- Drag the last task to the middle position. 
- Reorder tasks multiple times. 
- Refresh the page and confirm that the order is preserved. 
- Confirm that no tasks are duplicated or missing after reordering. 
- Drop an item back into its original position and confirm the order remains unchanged. 
- Cancel a drag operation and confirm no task order changes are saved. 
- Attempt to drag when only one task exists
- Attempt to drag when no tasks exist and confirm the application does not show errors. 
- Drag a completed task and confirm its completed status is preserved. 
- Drag a task after deleting another task and confirm the remaining task order is correct.
- Drag tasks rapidly multiple times and confirm the final order is accurate. 
- Attempt to drag from the delete or complete control and confirm those controls still perform only their intended actions.
- Drag beyond the first or last valid position and confirm the task remains within the allowed list boundaries
- Reload the page immediately after dropping a task and confirm the new order is preserved. 
- Verify drag-and-drop behavior on touch devices. 
- Verify the solution works on Chromium, Firefox, and WebKit. 
    


