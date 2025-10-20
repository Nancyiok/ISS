# ISS Tracker Web Application

This web application displays the real-time location of the International Space Station (ISS), its crew count and composition, as well as the current UTC time. All data is automatically updated every 5 seconds.

---

## Features

- Fetch the current ISS coordinates (latitude and longitude) via the OpenNotify API.  
- Display the ISS location on a Google Map with a marker.  
- Show the current crew count and members of the ISS.  
- Display the current UTC time.  
- Automatic data updates every 5 seconds.  

---

## Setup

1. Create a `.env` file in the project root and add your Google Maps API key:

    ```env
    VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
    ```

2. You can get your Google Maps API key here: [Google Cloud Console – Maps API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com?utm_source=Docs_EnableAPIs&utm_content=Docs_maps-backend&ref=%2Fmaps%2Fdocumentation%2Fjavascript%2Fget-api-key&_gl=1*1c7wx53*_ga*MTgyNTkyNTQ1Ny4xNzYwNTIyNzg4*_ga_NRWSTWS78N*czE3NjA5MTY5MzUkbzgkZzEkdDE3NjA5MTY5NTkkajM2JGwwJGgw&project=project-85c15b23-7ba7-4aa4-bd4)

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open the URL displayed in the console (`http://localhost:3000`) in your browser.
