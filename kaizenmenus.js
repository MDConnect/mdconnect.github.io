
var sysdata = {
  "name": "Kaizen Menus",
  "children" : [
    {
      "name": "Dashboard",
      "children" : [
        {
          "name": "Manage dashboard templates",
          "children": []
        },
        {
          "name": "Manage summary templates",
          "children": []
        }
      ]
    },
    {
      "name": "Timeline",
      "children" : [
        {
          "name": "Timeline",
          "children": []
        },
        {
          "name": "Procedural skills",
          "children": []
        },
        {
          "name": "Mini-CEX",
          "children": []
        },
        {
          "name": "Portfolio Tasks",
          "children": []
        },
        {
          "name": "Manage categories",
          "children": []
        }
      ]
    },
    {
      "name": "Documents",
      "children" : [
        {
          "name": "Files/folders (1-n)",
          "children": [
            {
              "name": "Rename",
              "children": []
            },
            {
              "name": "Hide / share / make private",
              "children": []
            },
            {
              "name": "Delete",
              "children": []
            },
            {
              "name": "Select / Unselect",
              "children": []
            }
          ]
        },
        {
          "name": "New folder",
          "children": []
        },
        {
          "name": "Upload document",
          "children": []
        },
        {
          "name": "Move to...",
          "children": []
        }
      ]
    },
    {
      "name": "Content",
      "children" : [
      {
        "name": "FAQs",
        "children": [
        ]
      },
      {
        "name": "Event Types",
        "children": [
        ]
      },
      {
        "name": "Blueprints",
        "children": [
        ]
      },
      {
        "name": "Announcements",
        "children": [
        ]
      },
      {
        "name": "Email templates",
        "children": [
          {
            "name": "Templates (1-n)",
            "children": [
              {
                "name": "View",
                "children": []
              },
              {
                "name": "View sent emails",
                "children": []
              },
              {
                "name": "Send test email",
                "children": []
              },
              {
                "name": "Preview test email",
                "children": []
              }
            ]
          },
          {
            "name": "View sent emails",
                "children": []
          }
        ]
      },
      ]
    },
    {
      "name": "Goals",
      "children" : [
        {
          "name": "Goals",
          "children": []
        },
        {
          "name": "Manage categories",
          "children": []
        }
      ]
    },
    {
      "name": "Reports",
      "children" : [
        {
           "name": "Reports",
           "children": []
        },
        {
           "name": "Graduate Attributes",
           "children": []
        },
        {
           "name": "Outcomes for Medical Graduate",
           "children": []
        },
        {
           "name": "Rotating Term",
           "children": []
        }
      ]
    },
    {
      "name": "User Management",
      "children" : [
        {
          "name": "Users (1-n)",
          "children": [
            {
               "name": "Summary",
               "children": []
            },
            {
               "name": "Timeline",
               "children": []
            },
            {
               "name": "Goals",
               "children": []
            },
            {
               "name": "Documents",
               "children": []
            },
            {
              "name": "New user",
              "children": []
            }
          ]
        },
        {
          "name": "All events (1-n)",
          "children": [
            {
               "name": "Delete",
               "children": []
            },
            {
               "name": "Show audit log",
               "children":[]
            },
            {
               "name": "Preview",
               "children":[]
            }
          ]
        },
        {
          "name": "Pending sections (1-n)",
          "children": [
            {
              "name": "Preview",
              "children": [
                {
                  "name": "Approve",
                  "children": []
                },
                {
                  "name": "Reject",
                  "children": []
                }
              ]
            },
            {
              "name": "Show audit log",
              "children": []
            }
          ]
        },
        {
          "name": "User fields",
          "children": [
            {
              "name": "Fixed",
              "children": []
            },
            {
              "name": "Optional (1-n)",
              "children": [
                {
                  "name": "edit",
                  "children": []
                }
              ]
            },
            {
              "name": "Reorder",
              "children": []
            },
            {
              "name": "New user field",
              "children": []
            }
          ]
        },
        {
          "name": "Relations",
          "children": [
            {
              "name": "Relations (1-n)",
              "children": [
                {
                  "name": "Edit",
                  "children": []
                }
              ]
            },
            {
              "name": "New relation",
              "children": []
            }
          ]
        },
        {
          "name": "Roles",
          "children": [
            {
              "name": "Roles (1-n)",
              "children": [
                {
                  "name": "Edit",
                  "children": []
                }
              ]
            },
            {
              "name": "New role",
              "children": []
            }
          ]
        }
      ]
    },
    ]
};

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 120, bottom: 30, left: 120},
    width = 1600 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

/*// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;*/

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)

  // svg.append("rect")
  //   .attr("x",0)
  //   .attr("y",0)
  //   .attr("width", width + margin.right + margin.left)
  //   .attr("height", height + margin.top + margin.bottom)
  //   .attr("fill", "white");

  .append("g")
    .attr("transform", "translate("
          + margin.left + "," + margin.top + ")");

var i = 0,
    duration = 750,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
// root = d3.hierarchy(treeData, function(d) { return d.children; });
root = d3.hierarchy(sysdata, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}

function update(source) {

  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function(d){ d.y = d.depth * 280});

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      });

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) { 
        return "translate(" + d.y + "," + d.x + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 10)
    .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
    })
    .attr('cursor', 'pointer');


  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

    return path
  }

  // Toggle children on click.
  function click(d5, d, e) {
    // console.log('clicked',d);
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    update(d);
  }
}
