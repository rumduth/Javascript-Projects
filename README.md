#1. Guess My Number
   Progress: Done
   Difficulty: 1/5
   Description: The purpose of this code is to create an interactive number guessing game where the user tries to guess a randomly generated secret number between 1 and 20. The user has a limited number of guesses, and the game provides feedback on each guess. If the user guesses correctly, they win and their score is recorded as a high score. If they run out of guesses, they lose. The game can be reset to start a new round.
   
#2. Modal Window
   Progress: Done
   Diffciculty: 1/5
   The purpose of this code is to create an interactive modal window that can be opened and closed using buttons on the webpage, as well as by clicking outside the modal or pressing the Escape key.

#3. Pig Game
   Progress: Done
   Difficulty: 2/5
   This game involves rolling a dice, accumulating points per turn, deciding when to hold accumulated points to avoid risking losing them, and being the first to reach a predefined score (100 in this case) to win. It's a turn-based game where players alternate turns until one of them wins.

#4. Bankist
   Progress: Done
   Difficulty: 4/5

   Features of the Bankist App

+ User Authentication:
- Users can log in with their username and PIN.
- Displays a personalized welcome message upon successful login.
- Automatically logs out the user after a period of inactivity.

+ Account Overview:
- Displays the balance, income, expenses, and interest for the user's account.
- Shows a detailed list of transactions with dates and types (deposit or withdrawal).

+ Transfers:
- Allows users to transfer money to other accounts within the app.
- Ensures that the transfer is valid and the recipient exists.

+ Loan Requests:
- Users can request loans, which are granted based on certain conditions.

+ Account Closure:
- Users can close their accounts by providing their username and PIN.
- Confirms the closure before permanently deleting the account.

+ Transaction Sorting:
- Users can sort their transaction history.

+ Timers:

- Implements a session timeout feature that logs out the user after a period of inactivity for security purposes.

#5. Bankist Website

   Progress: Done
   Difficulty: 4/5

   Key Functions of the Website

+ Modal Window:
   - Displays important messages or forms in a modal dialog when triggered by buttons (`btnsOpenModal`) or overlay clicks (`overlay`).
+ Smooth Scrolling:
- Enables smooth navigation between sections of the page when clicking on links (`btnScrollTo`, `.nav__links`).

+ Tabbed Components:
- Organizes content into tabs (`operations__tab`) that switch displayed content (`operations__content`) when clicked.

+ Sticky Navigation:
- Navigation bar (`nav`) becomes sticky (`sticky`) when scrolled past a certain point, enhancing usability.

+ Slider Component:
 - Features a slider (`slider`) allowing navigation through slides (`slides`) with controls (`leftBtn`, `rightBtn`, `dotsContainer`).

#6. Workout Tracker App
   Progress: Done
   Difficulty: 4/5

Key Functions of the App

+ Geolocation Integration:
- Uses the user's current geolocation to load a map centered on their position (`navigator.geolocation.getCurrentPosition`).

+ Workout Logging:
- Allows users to log different types of workouts (running and cycling) by entering details like distance, duration, cadence, and elevation through a form (`form.addEventListener("submit", this._newWorkout.bind(this))`).

+ Workout Visualization:
- Displays each logged workout on the map as a marker and lists detailed information below the map (`this._renderWorkoutList`, `this._renderWorkoutMarker`).

+ Dynamic Form Handling:
- Adjusts the form dynamically based on the selected workout type, toggling fields relevant to running (cadence) and cycling (elevation) (`inputType.addEventListener("change", this._toggleElevationField)`).

+ Persistent Data Storage:
- Saves workouts to local storage to ensure data persists across sessions and can be reset if needed (`this._setLocalStorage`, `this._getLocalStorage`, `localStorage.removeItem("workouts")`).

+ Interactive UI:**
- Allows users to interact with the map and workout list, clicking on workouts to move the map view to the corresponding location and see workout details (`containerWorkouts.addEventListener("click", this._moveToWorkoutPos.bind(this))`).
