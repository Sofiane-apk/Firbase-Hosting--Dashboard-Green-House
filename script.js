// REPLACE <...> BY YOUR FIREBASE PROJECT CONFIGURATION:
const   firebaseConfig = {
    apiKey: "AIzaSyBM_gyn0qKW7Wmyiqb0Zo7c9li5EnnvGfE",
    authDomain: "iot-green-house.firebaseapp.com",
    databaseURL: "https://iot-green-house.firebaseio.com",
    projectId: "iot-green-house",
    storageBucket: "iot-green-house.appspot.com",
    messagingSenderId: "427046450456",
    appId: "1:427046450456:web:bce173703bb0241c9a1a6d",
    measurementId: "G-TP2RCHRRVD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Number of last elements to work with, in the 'timestamped_measures' node of the database:
const nbOfElts = 300;

// The big picture: EACH TIME A VALUE CHANGES in the 'timestamped_measures' node, e.g.
// when a new timestamped measure has been pushed to that node,
// we make an array of the last 'nbOfElts' timestamps
// and another array of the last 'nbOfElts' luminosity values.
// This is because plotly.js, our plotting library, requires arrays of data, one for x and one for y.
// Those sliding arrays produce a live data effect.
// -----
// See https://firebase.google.com/docs/database/web/lists-of-data for trigger syntax:
///-------------------------------------------- plot tem--------------------------------------------------------------------
firebase.database().ref('timestamped_measures').limitToLast(nbOfElts).on('value', ts_measures => {
    let timestamps = [];
    let values = [];
    ts_measures.forEach(ts_measure => {
        timestamps.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        values.push(ts_measure.val().value);
    });
    // Get a reference to the DOM node that welcomes the plot drawn by Plotly.js:
    myPlotDivhum = document.getElementById('myPlot');
    const data = [{
      marker: {
    color: 'rgb(255, 255, 255)',
    size: 10
  },
        x: timestamps,
        y: values
    }];
    const layout = {

      paper_bgcolor: 'rgba(255, 255, 255, 0)',
      plot_bgcolor: 'rgba(255, 255, 255, 0)',
        autosize : true ,
        width :935,
        height : 500 ,



        xaxis: {
          showticklabels: true,
              tickfont: {
                family: ' sans-serif',
                size: 14,
                color: 'white'
              },

          showgrid: true,
             zeroline: true,
            showline: true,
            linecolor: 'rgba(255, 255, 255, 0.63)',
            linewidth: 2,



        },
        yaxis: {

          showticklabels: true,
              tickfont: {
                family: ' sans-serif',
                size: 14,
                color: 'white'
              },

          showgrid: true,
             zeroline: true,
            showline: true,
            linecolor: 'rgba(255, 255, 255, 0.63)',
            linewidth: 2,


        },
        margin: {
            r: 50,
            pad: 0
        },

    }


    // At last we plot data :-)
    Plotly.newPlot(myPlotDivhum, data, layout, { responsive: true });
});

// ----------------------------------------- ---PLOTY Humidity ----------------------------------------------------
firebase.database().ref('timestamped_measures2').limitToLast(nbOfElts).on('value', ts_measures => {
    let timestamps = [];
    let values = [];
    ts_measures.forEach(ts_measure => {
        timestamps.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        values.push(ts_measure.val().value);
    });
    // Get a reference to the DOM node that welcomes the plot drawn by Plotly.js:
    myPlotDivhum = document.getElementById('myPlothum');
    const data = [{
      marker: {
    color: 'rgb(255, 255, 255)',
    size: 10
  },
        x: timestamps,
        y: values
    }];
    const layout = {

      paper_bgcolor: 'rgba(255, 255, 255, 0)',
      plot_bgcolor: 'rgba(255, 255, 255, 0)',
        autosize : true ,
        width :935,
        height : 500 ,



        xaxis: {
          showticklabels: true,
              tickfont: {
                family: ' sans-serif',
                size: 14,
                color: 'white'
              },

          showgrid: true,
             zeroline: true,
            showline: true,
            linecolor: 'rgba(255, 255, 255, 0.63)',
            linewidth: 2,



        },
        yaxis: {

          showticklabels: true,
              tickfont: {
                family: ' sans-serif',
                size: 14,
                color: 'white'
              },

          showgrid: true,
             zeroline: true,
            showline: true,
            linecolor: 'rgba(255, 255, 255, 0.63)',
            linewidth: 2,


        },
        margin: {
            r: 50,
            pad: 0
        },

    }


    // At last we plot data :-)
    Plotly.newPlot(myPlotDivhum, data, layout, { responsive: true });
});
