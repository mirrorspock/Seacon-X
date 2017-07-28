try {
  // Configure graphics
  var width = 1000,
    height = 800;

  var circleWidth = 10,
    charge = -150,
    gravity = 0.1;

  var palette = {
    lightgray: "#D9DEDE",
    gray: "#C3C8C8",
    mediumgray: "#536870",
    orange: "#BD3613",
    purple: "#595AB7",
    yellowgreen: "#738A05"
  };

     var nodes = [
    { id: 0, name: "Seacon Experience  ", description: "                         ",      fill: "green",      target: [1, 19,4]},
    { id: 1, name: "Bouw               ", description: "                         ",      fill: "green",      target: [2, 3] },
    { id: 2, name: "Ruimte             ", description: "                         ",      fill: "red",        target: [] },
    { id: 3, name: "Hardware           ", description: "                         ",      fill: "red",        target: [14, 15, 18] },
    { id: 4, name: "Showcases          ", description: "                         ",      fill: "green",      target: [5, 7, 11, 10, 12, 13] },
    { id: 5, name: "3D Printer         ", description: "                         ",      fill: "red",        target: [] },
    { id: 6, name: "AR                 ", description: "                         ",      fill: "blue",       target: [31, 29, 30, 32] },
    { id: 7, name: "VR                 ", description: "                         ",      fill: "blue",       target: [31, 29, 30, 32] },
    { id: 8, name: "Relatiegeschenk    ", description: "                         ",      fill: "red",        target: [9, 10] },
    { id: 9, name: "Google Cardboard   ", description: "                         ",      fill: "red",        target: [] },
    { id: 10, name: "HoloCube          ", description: "                         ",      fill: "red",        target: [] },
    { id: 11, name: "Warehouse Drone   ", description: "                         ",      fill: "red",        target: [] },
    { id: 12, name: "PostDrone         ", description: "                         ",      fill: "red",        target: [] },
    { id: 13, name: "Selfdriving Trucks", description: "                         ",      fill: "red",        target: [] },
    { id: 14, name: "Beamers           ", description: "                         ",      fill: "red",        target: [17] },
    { id: 15, name: "Licht             ", description: "                         ",      fill: "red",        target: [17] },
    { id: 16, name: "Tech              ", description: "                         ",      fill: "red",        target: [14, 15, 17, 18] },
    { id: 17, name: "Controls          ", description: "                         ",      fill: "red",        target: [] },
    { id: 18, name: "PC                ", description: "                         ",      fill: "red",        target: [] },
    { id: 19, name: "Content           ", description: "                         ",      fill: "green",      target: [25, 20, 24, 26] },
    { id: 20, name: "PPT               ", description: "                         ",      fill: "lightblue",  target: [23, 22, 21] },
    { id: 21, name: "Slides            ", description: "                         ",      fill: "lightblue",  target: [] },
    { id: 22, name: "Verhaal           ", description: "                         ",      fill: "purple",     target: [] },
    { id: 23, name: "Sjabloon          ", description: "                         ",      fill: "lightblue",  target: [] },
    { id: 24, name: "WWW               ", description: "                         ",      fill: "lightblue",  target: [22] },
    { id: 25, name: "Huisstijl         ", description: "                         ",      fill: "purple",     target: [20, 23, 24, 27] },
    { id: 26, name: "Portal            ", description: "                         ",      fill: "lightblue",  target: [27] },
    { id: 27, name: "Experience app.   ", description: "                         ",      fill: "lightblue",  target: [21, 22, 28, 31, 7, 6] },
    { id: 28, name: "360               ", description: "                         ",      fill: "lightblue",  target: [31, 29, 30] },
    { id: 29, name: "Video             ", description: "                         ",      fill: "lightblue",  target: [] },
    { id: 30, name: "Stills            ", description: "                         ",      fill: "lightblue",  target: [] },
    { id: 31, name: "Tour              ", description: "                         ",      fill: "lightblue",  target: [] },
    { id: 32, name: "Globe             ", description: "                         ",      fill: "lightblue",  target: [] },
    { id: 33, name: "Narrowcasting.    ", description: "                         ",      fill: "lightblue",  target: [] }
  ];


  var numNodes = nodes.count;

  // Create the links array from the generated data
  var links = [];
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].target !== undefined) {
      for (var j = 0; j < nodes[i].target.length; j++) {
        links.push({
          source: nodes[i],
          target: nodes[nodes[i].target[j]]
        });
      }
    }
  }

  // Create SVG
  var fdGraph = d3
    .select("#graphic")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create the force layout to calculate and animate node spacing
  var forceLayout = d3.layout
    .force()
    .nodes(nodes)
    .links(links)
    .gravity(gravity)
    .charge(charge)
    .size([width, height]);

  // Create the SVG lines for the links
  var link = fdGraph
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", palette.gray)
    .attr("stroke-width", 1)
    .attr("class", function(d, i) {
      // Add classes to lines to identify their from's and to's
      var theClass = "line_" + d.source.id + " line";
      if (d.target !== undefined) {
        theClass += " to_" + d.target.id;
      }
      return theClass;
    });

  // Create the SVG groups for the nodes and their labels
  var node = fdGraph
    .selectAll("circle")
    .data(nodes)
    .enter()
    .append("g")
    .attr("id", function(d) {
      return "node_" + d.id;
    })
    .attr("class", "node")
    .on("mouseover", function(d) {
      // When mousing over a node, make the label bigger and bold
      // and revert any previously enlarged text to normal
      d3
        .selectAll(".node")
        .selectAll("text")
        .attr("font-size", "12")
        .attr("font-weight", "normal");

      // Highlight the current node
      d3
        .select(this)
        .select("text")
        .attr("font-size", "16")
        .attr("font-weight", "bold");

      
      d3.select("div#title").text(d.name);

      d3.select("div#description").text(d.description);


      // Hightlight the nodes that the current node connects to
      for (var i = 0; i < d.target.length; i++) {
        d3
          .select("#node_" + d.target[i]) 
          .select("text")
          .attr("font-size", "14")
          .attr("font-weight", "bold");
      }

      // Reset and fade-out the unrelated links
      d3
        .selectAll(".line")
        .attr("stroke", palette.lightgray)
        .attr("stroke-width", 1);

      for (var x = 0; x < links.length; x++) {
        if (links[x].target !== undefined) {
          if (links[x].target.id === d.id) {
            // Highlight the connections to this node
            d3
              .selectAll(".to_" + links[x].target.id)
              .attr("stroke", palette.orange)
              .attr("stroke-width", 2);

            // Highlight the nodes connected to this one
            d3
              .select("#node_" + links[x].source.id)
              .select("text")
              .attr("font-size", "14")
              .attr("font-weight", "bold");
          }
        }
      }

      // Highlight the connections from this node
      d3
        .selectAll(".line_" + d.id)
        .attr("stroke", palette.purple)
        .attr("stroke-width", 3);

      // When mousing over a node,
      // make it more repulsive so it stands out
      forceLayout.charge(function(d2, i) {
        if (d2 != d) {
          // Make the nodes connected to more repulsive
          for (var i = 0; i < d.target.length; i++) {
            if (d2.id == d.target[i]) {
              return charge * 8;
            }
          }

          // Make the nodes connected from more repulsive
          for (var x = 0; x < links.length; x++) {
            if (links[x].source.id === d2.id) {
              if (links[x].target !== undefined) {
                if (links[x].target.id === d.id) {
                  return charge * 8;
                }
              }
            }
          }

          // Reset unrelated nodes
          return charge;
        } else {
          // Make the selected node more repulsive
          return charge * 10;
        }
      });
      forceLayout.start();
    })
    .call(forceLayout.drag);

  // Create the SVG circles for the nodes

  node
    .append("circle")
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    })
    .attr("r", circleWidth)
    .attr("fill", function(d, i) {
      if (d.fill) {
        return d.fill;
      }        
      return palette.yellowgreen;
    });

  // Create the SVG text to label the nodes
  node
    .append("text")
    .text(function(d) {
      return d.name;
    })
    .attr("font-size", "12");

  // Animate the layout every time tick
  forceLayout.on("tick", function(e) {
    // Move the nodes base on charge and gravity
    node.attr("transform", function(d, i) {
      return "translate(" + d.x + ", " + d.y + ")";
    });

    // Adjust the lines to the new node positions
    link
      .attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        if (d.target !== undefined) {
          return d.target.x;
        } else {
          return d.source.x;
        }
      })
      .attr("y2", function(d) {
        if (d.target !== undefined) {
          return d.target.y;
        } else {
          return d.source.y;
        }
      });
  });

  // Start the initial layout
  forceLayout.start();
} catch (e) {
  alert(e);
}