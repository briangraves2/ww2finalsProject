

var initGraph2 = function(data) {
var height=300
var width=500

var svg = d3.select("#Economy")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
    
var xScale2 = d3.scaleBand()
          .domain(data.map(function(d) {
              return d.Year;
          }))
          .range([5, 500])
var xAxis= d3.axisBottom()
    .scale(xScale2)

var yScale2 = d3.scaleLinear()
        .domain([0, d3.max(data.map(function(d){ return parseFloat(d.USA)}))])
        .range([height, 40]);

var yAxis = d3.axisLeft()
        .scale(yScale2);
    svg.append("g")
    .call(yAxis)
    .attr("transform", "translate(55, " + -40  +")")

    
var xAxisTranslate = height -40;
    svg.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .call(xAxis)      
svg.append("path")
    .datum(data)
    .attr("fill","none")
    .attr("stroke","gray")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(function(d) { 
    return xScale2(parseInt(d.Year)) 
})
      .y(function(d) { 
    return yScale2(parseInt(d.Germany)) 
})).attr("transform", "translate(50, " + -40 +")")
    
.on("mouseover", function(d) {
var xPosition = parseFloat(d3.select(this).attr("x")) +10;
var yPosition = parseFloat(d3.select(this).attr("y")) +10;

d3.select("#tooltip2")
    .style("left","60%")
    .style("top","150px")
    .classed("hidden", false)
    
d3.select("#tooltip2").select("#Country2")
    .text("Germany");
})
    
    .on("mouseout", function() {
    d3.select("#tooltip2").classed("hidden", true)
})
    
svg.append("path")
    .datum(data)
    .attr("fill","none")
    .attr("stroke","Red")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(function(d) { 
    return xScale2(parseInt(d.Year)) 
})
      .y(function(d) { 
    return yScale2(parseInt(d.USSR)) 
})).attr("transform", "translate(50, " + -40 +")") 
    
.on("mouseover", function(d) {
var xPosition = parseFloat(d3.select(this).attr("x")) +10;
var yPosition = parseFloat(d3.select(this).attr("y")) +10;

d3.select("#tooltip2")
    .style("left","60%")
    .style("top","150px")
    .classed("hidden", false)
    
d3.select("#tooltip2").select("#Country2")
    .text("USSR");
})
    
.on("mouseout", function() {
    d3.select("#tooltip2").classed("hidden", true)
})
    
.attr("id","USSR-Line")
svg.append("path")
    .datum(data)
    .attr("fill","none")
    .attr("stroke","Navy")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(function(d) { 
    return xScale2(parseInt(d.Year)) 
})
      .y(function(d) { 
    return yScale2(parseInt(d.UK)) 
})).attr("transform", "translate(50, " + -40 +")") 

.on("mouseover", function(d) {
var xPosition = parseFloat(d3.select(this).attr("x")) +10;
var yPosition = parseFloat(d3.select(this).attr("y")) +10;

d3.select("#tooltip2")
    .style("left","60%")
    .style("top","150px")
    .classed("hidden", false)
    
d3.select("#tooltip2").select("#Country2")
    .text("UK");
    
})    
    .on("mouseout", function() {
    d3.select("#tooltip2").classed("hidden", true)
})
    
.attr("id","UK-Line")
svg.append("path")
    .datum(data)
    .attr("fill","none")
    .attr("stroke","Green")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(function(d) { 
    return xScale2(parseInt(d.Year)) 
})
      .y(function(d) { 
    return yScale2(parseInt(d.Italy)) 
})).attr("transform", "translate(50, " + -40 +")") 
    
.on("mouseover", function(d) {
var xPosition = parseFloat(d3.select(this).attr("x")) +10;
var yPosition = parseFloat(d3.select(this).attr("y")) +10;

d3.select("#tooltip2")
    .style("left","60%")
    .style("top","150px")
    .classed("hidden", false)
    
d3.select("#tooltip2").select("#Country2")
    .text("Italy");
    
})    
    .on("mouseout", function() {
    d3.select("#tooltip2").classed("hidden", true)
})
    
svg.append("path")
    .datum(data)
    .attr("fill","none")
    .attr("stroke","Crimson")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(function(d) { 
    return xScale2(parseInt(d.Year)) 
})
      .y(function(d) { 
    return yScale2(parseInt(d.Japan)) 
})).attr("transform", "translate(50, " + -40 +")") 
    
.on("mouseover", function(d) {
var xPosition = parseFloat(d3.select(this).attr("x")) +10;
var yPosition = parseFloat(d3.select(this).attr("y")) +10;

d3.select("#tooltip2")
    .style("left","60%")
    .style("top","150px")
    .classed("hidden", false)
    
d3.select("#tooltip2").select("#Country2")
    .text("Japan");
    
})
    .on("mouseout", function() {
    d3.select("#tooltip2").classed("hidden", true)
})
    
svg.append("path")
    .datum(data)
    .attr("fill","none")
    .attr("stroke","Blue")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(function(d) { 
    return xScale2(parseInt(d.Year)) 
})
      .y(function(d) { 
    return yScale2(parseInt(d.USA)) 
})).attr("transform", "translate(50, " + -40 +")") 
    
.on("mouseover", function(d) {
var xPosition = parseFloat(d3.select(this).attr("x")) +10;
var yPosition = parseFloat(d3.select(this).attr("y")) +10;

d3.select("#tooltip2")
    .style("left","60%")
    .style("top","150px")
    .classed("hidden", false)
    
d3.select("#tooltip2").select("#Country2")
    .text("USA");
    
})
.on("mouseout", function() {
    d3.select("#tooltip2").classed("hidden", true)
})
.attr("id","USA-Line")
    
var labels = d3.select("#Economy svg")
.append("g")
.classed("labels", true)

labels.append("text")
    .text("Military Expenses (Billions)")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", 20+(width/2))
    .attr("y", 20/2 +10)
    
labels.append("text")
    .text("Year")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("x", 20+(width/2))
    .attr("y", height -3)
    
    labels.append("g")
    .attr("transform","translate(20,"+
        (height/2 -20)+")")
    .append("text")
    .text("Military Expenses")
    .classed("label", true)
    .attr("text-anchor","middle")
    .attr("transform","rotate(-90)");
}
    
    
var dataset = d3.csv("Economy/Economy.csv");
var successFcn2=function(data){
console.log(data);
initGraph2(data); 
}
var errFcn2=function(errormessage){
    console.log(errormessage)
}
dataset.then(successFcn2,errFcn2)