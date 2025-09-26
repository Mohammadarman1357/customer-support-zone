# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     

### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 - Answer : JSX is a syntax extension for JavaScript that looks like HTML and is used in React to describe the UI.
 - What is the difference between State and Props?
 - Answer : State is data managed within a component and can change over time; Props are read-only data passed from parent to child components.
 - What is the useState hook, and how does it work?
 - Answer : useState is a React hook that lets you add state to functional components. It returns the state value and a function to update it.
 - How can you share state between components in React?
 - Answer : You can share state between components by lifting state up to a common parent and passing it via props, or using Context API or state management libraries.
 - How is event handling done in React?
 - Answer : Event handling in React is done using camelCase attributes like onClick and passing a function as the handler.


---

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 


---


