try {
  // Configure graphics
  var width = 1400,
    height = 800;

  var n;
  
  var circleWidth = 15,
    charge = -750,
    friction = 0.6,
    distance = 20,
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
    { id: 0, name: "Seacon Experience  ", difficulty: "Easy/Medium/Hard/Project", description: "Master Project.          ",size:1,       fill: "red",      target: [1, 19,4]},
    { id: 1, name: "Bouw               ", difficulty: "Easy/Medium/Hard/Project", description: "Facility                 ",size:1,       fill: "green",      target: [2, 3] },
    { id: 2, name: "Ruimte             ", difficulty: "Easy/Medium/Hard/Project", description: "Facility                 ",size:1,       fill: "gray",       target: [] },
    { id: 3, name: "Hardware           ", difficulty: "Easy/Medium/Hard/Project", description: "ICT.                     ",size:1,       fill: "gray",       target: [14, 15, 18] },
    { id: 4, name: "Showcases          ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1.2,       fill: "green",      target: [5, 7, 11, 10, 12, 13,16] },
    { id: 5, name: "3D Printer         ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",       target: [] },
    { id: 6, name: "AR                 ", difficulty: "Easy/Medium/Hard/Project", description: "Augmented reality Demo. can start using iPhones, and expand when hardware becomes available content matter needs to be discussed, could be an live-overlay to AR graphs.",size:1.4,       fill: "blue",       target: [32,33] },
    { id: 7, name: "VR                 ", difficulty: "Easy/Medium/Hard/Project", description: "Virtual Reality Demo. Complexity increases based on wishes, can start with only simple demo, up to a full interactive tour.",size:1.3,       fill: "blue",       target: [31, 28, 32, 9] },
    { id: 8, name: "Relatiegeschenk    ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",       target: [9, 10] },
    { id: 9, name: "Google Cardboard   ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "orange",        target: [] },
    { id: 10, name: "HoloCube          ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1.4,       fill: "orange",        target: [] },
    { id: 11, name: "Warehouse Drone   ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "orange",        target: [] },
    { id: 12, name: "PostDrone         ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "orange",        target: [] },
    { id: 13, name: "Selfdriving Trucks", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "orange",        target: [] },
    { id: 14, name: "Beamers           ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "lightgray",  target: [17] },
    { id: 15, name: "Licht             ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "lightgray",  target: [17] },
    { id: 16, name: "Narrowcasting     ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "lightgray",  target: [] },
    { id: 17, name: "Controls          ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "lightgray",  target: [] },
    { id: 18, name: "PC                ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",       target: [17,14] },
    { id: 19, name: "Content           ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "green",      target: [25, 20, 24, 26] },
    { id: 20, name: "PPT               ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",  target: [23, 22, 21] },
    { id: 21, name: "Slides            ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",  target: [] },
    { id: 22, name: "Verhaal           ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",       target: [] },
    { id: 23, name: "Sjabloon          ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",  target: [] },
    { id: 24, name: "WWW               ", difficulty: "Easy/Medium/Hard/Project", description: "Seacon website needs to integrate the portal and all stylings must match",size:1,       fill: "lightgray",  target: [22, 32] },
    { id: 25, name: "Huisstijl         ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",       target: [20, 23, 24, 27] },
    { id: 26, name: "Portal            ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1,       fill: "gray",       target: [27] },
    { id: 27, name: "Experience app.   ", difficulty: "Easy/Medium/Hard/Project", description: "Application used by managers (and customers) to view the Seacon 'Story' ",size:1,       fill: "blue",       target: [21, 22, 28, 31, 7, 6, 32,33] },
    { id: 28, name: "360               ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1.1,       fill: "blue",  target: [31, 29, 30] },
    { id: 29, name: "360 Video         ", difficulty: "Easy/Medium/Hard/Project", description: "                         ",size:1.3,       fill: "lightblue",  target: [] },
    { id: 30, name: "360 Stills        ", difficulty: "Easy/Medium/Hard/Project", description: "360 photos of various Seacon locations and showcases, first version can be created in-house",size:1.2,              fill: "lightblue",  target: [] },
    { id: 31, name: "Tour              ", difficulty: "Easy/Medium/Hard/Project", description: "Virtual tour through the Seacon facility and external locations.",size:1.3,              fill: "lightblue",  target: [32,28] },
    { id: 32, name: "Globe             ", difficulty: "Easy/Medium/Hard/Project", description: "Seacon dataglobe, shows various global datasets",size:1.2,              fill: "lightblue",  target: [] },
    { id: 33, name: "Enhanced Reporting", difficulty: "Easy/Medium/Hard/Project", description: "",size:1.2,              fill: "gray",  target: [] }
       
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
    .friction(friction)
    .linkDistance(distance)
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
              return charge * 2;
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
    .attr("r", function(d){
      if (d.size) {
        return circleWidth*d.size;
      }        
      return circleWidth})
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
  // for (var i = n * n; i > 0; --i) forceLayout.tick();
  // forceLayout.stop();
  
} catch (e) {
  alert(e);
}