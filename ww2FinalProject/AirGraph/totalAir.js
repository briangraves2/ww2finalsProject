
var initGraph = function(data) {
 var screen = {width:500,height:400};
var margins ={top:15,bottom:50,left:50,right:30}
var graph = {width:screen.width - margins.left - margins.right, height: screen.height - margins.top - margins.bottom}; 
var w = 500;
var h = 300;
var padding =30;
var barPadding=0;
var myScale = d3.scaleLinear()
  .domain([0, d3.max(data.map(function(d){return parseInt(d.Total_Aircraft)
  }))])
  .range([0, h-padding -20])
var xScale = d3.scaleBand()
          .domain(data.map(function(d) {
              return d.Power;
          }))
          .range([5, 500])
var xAxis= d3.axisBottom()
    .scale(xScale)

var svg = d3.select("#Aircraft")
.append("svg")
.attr("width", w)
.attr("height", h);
d3.select("#Aircraft svg")    
.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("fill","teal")
.attr("fill",function(d) {
    return "rgb(0, 0, " + Math.round(parseInt(d.Total_Aircraft) * 1) + ")";
})
.attr("x",function(d, i){
    return xScale(d.Power)})
.attr("y", function(d){
    return h - padding - myScale(parseInt(d.Total_Aircraft));
})
.attr("width", 50)
.attr("height",function(d){
    return myScale(parseInt(d.Total_Aircraft));
})
    .attr("id", function(d){
    return d.Power
})
    
.on("mouseover", function(d) {
var xPosition = parseFloat(d3.select(this).attr("x")) +80;
var yPosition = parseFloat(d3.select(this).attr("y")) +60;

d3.select("#tooltip")
    .style("left",xPosition+"px")
    .style("top",yPosition+"px")
    .classed("hidden", false)
    
d3.select("#tooltip").select("#Country")
    .text(d.Power);
    
d3.select("#tooltip").select("#TAir")
    .text(d.Total_Aircraft);

})
.on("mouseout", function() {
    d3.select("#tooltip").classed("hidden", true)
})        
    
svg.append("g")
    .call(xAxis)
    .attr("transform", "translate(0," +(h - padding)+")")
    
var labels = d3.select("svg")
.append("g")
.classed("labels", true)

labels.append("text")
    .text("Total Aircraft Production")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margins.left+(graph.width/2))
    .attr("y", margins.top/2 + 5);
}

var dataset = d3.csv("AirGraph/Aircraft.csv");
var successFcn=function(data){
console.log(data);
initGraph(data); 
}
var errFcn=function(errormessage){
    console.log(errormessage)
}
dataset.then(successFcn,errFcn)

//add tooltip, better colors, pretty it up, 