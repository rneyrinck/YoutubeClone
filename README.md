# **Overview**

#### [GITHUB PAGES LINK](https://rneyrinck.github.io/youtubeclone/)

<!-- ![image](image file) -->

## proj description

React application cloning YouTubes functionality created following a JS Mastery tutorial on youtube. Content is aggrigated from RapidAPI YouTube v3 API and styled with Material UI.

## New Technologies Used

- RapidAPI - Awesome and simplified API aggrigator with pre-set AXIOS api calls.
- MaterialUI - The styling was really simple and fairly inline with my experience with React Native and React-Bootstrap.

## REACT ARCHITECTURE

| Component     |                                              Description                                               |
| ------------- | :----------------------------------------------------------------------------------------------------: |
| App           |                                 This will render the react components                                  |
| components    |                   Houses all components in application for streamlined architecture                    |
| utils         |             Holds often called snippets such as the API call, images, and placeholder URLS             |
| ChannelCard   |                Displays quick content for youtube Channel as card format in video feeds                |
| ChannelDetail |          Displays channel information including views, subscribers and all videos of channel           |
| Feed          | Displays videos either searched or tabbed to. Also displays sidebar component of different video types |
| NavBar        |                         Header with logo link to feed, and searchbar component                         |
| SearchBar     |                 Search for specific videos functionality leads to searchfeed component                 |
| SearchFeed    |                                Displays SearchBar results as video feed                                |
| SideBar       |                                   Displays video categories on feed                                    |
| VideoCard     |                             Displays video details in card format on feeds                             |
| VideoDetail   |                             Displays video with sidebar of related videos                              |
| Videos        |                                   Displays videos based on API calls                                   |

| **URL**                          | **HTTP Verb** | **Action** | **Description**          |
| -------------------------------- | ------------- | ---------- | ------------------------ |
| /                                | GET           | read       | view feed                |
| /video/:id                                | GET           | read       | view video detail                |
| /channel/:id                                | GET           | read       | view channel detail                |
| /search/:searchTerm                                | GET           | read       | view searched results in feed                |


