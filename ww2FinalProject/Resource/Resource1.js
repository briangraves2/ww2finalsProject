
var initGraph3 = function(data) {
var screen = {width:500,height:400};
var margins ={top:15,bottom:50,left:50,right:30}
var graph = {width:screen.width - margins.left - margins.right, height: screen.height - margins.top - margins.bottom}; 
var w = 500;
var h = 300;
var padding =30;
var barPadding=0;
var myScale = d3.scaleLinear()
  .domain([0, d3.max(data.map(function(d){return parseInt(d.Coal)
  }))])
  .range([0, h-padding -20])
var xScale3 = d3.scaleBand()
          .domain(data.map(function(d) {
              return d.Country;
          }))
          .range([5, 500])
var xAxis= d3.axisBottom()
    .scale(xScale3)

var svg = d3.select("#Resource")
.append("svg")
.attr("width", w)
.attr("height", h);
d3.select("#Resource svg")    
.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("fill","teal")
.attr("fill",function(d) {
    return "rgb(0, 200, " + Math.round(parseInt(d.Coal) * 1) + ")";
})
.attr("x",function(d, i){
    return xScale3(d.Country)})
.attr("y", function(d){
    return h - padding - myScale(parseInt(d.Coal));
})
.attr("width", 40)
.attr("height",function(d){
    return myScale(parseInt(d.Coal));
})
    .attr("id", function(d){
    return d.Country
})
    
.on("mouseover", function(d) {
var xPosition2 = parseFloat(d3.select(this).attr("x"))+40;
var yPosition2 = parseFloat(d3.select(this).attr("y")) +450;

d3.select("#tooltip3")
    .style("left",xPosition2+"px")
    .style("top",yPosition2+"px")
    .classed("hidden", false)
    
d3.select("#tooltip3").select("#Country3")
    .text(d.Country)
    
d3.select("#tooltip3").select("#Coal")
    .text(d.Coal);

})
.on("mouseout", function() {
    d3.select("#tooltip3").classed("hidden", true)
})        
    
svg.append("g")
    .call(xAxis)
    .attr("transform", "translate(0," +(h - padding)+")")
    
var labels = d3.select("#Resource svg")
.append("g")
.classed("labels", true)

labels.append("text")
    .text("Coal Production")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margins.left+(graph.width/2))
    .attr("y", margins.top/2 + 5);
}

var dataset = d3.csv("Resource/Resource.csv");
var successFcn3=function(data){
console.log(data);
initGraph3(data); 
}
var errFcn3=function(errormessage){
    console.log(errormessage)
}
dataset.then(successFcn3,errFcn3)

//Resource tooltip 