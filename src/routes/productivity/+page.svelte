<script>
  import { onMount } from "svelte";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    BarController,
    CategoryScale,
    LinearScale,
  } from "chart.js";

  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, BarController);

  let canvas;
  let chart;

  export let data; 

  function getWeek(d) {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    return Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  }

  function randomColor(seed) {
    const colors = ["#4F46E5", "#22C55E", "#EF4444", "#F59E0B", "#3B82F6", "#EC4899"];
    return colors[seed % colors.length];
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: { legend: { position: "top" } },
    scales: {
      x: { stacked: true },
      y: { stacked: true, title: { display: true, text: "Hours" } }
    }
  };

  function buildChart() {
    if (!data?.events?.length) {
      console.log("No events found");
      return;
    }

    const grouped = {};
    for (const e of data.events) {
      const start = new Date(e.start.dateTime || e.start.date);
      const end = new Date(e.end.dateTime || e.end.date);
      const durationHours = (end - start) / (1000 * 60 * 60);

      const week = `${start.getFullYear()}-W${getWeek(start)}`;
      const name = e.summary || "Untitled";

      grouped[week] ??= {};
      grouped[week][name] ??= 0;
      grouped[week][name] += durationHours;
    }

    const weeks = Object.keys(grouped).sort();
    const categories = Array.from(new Set(weeks.flatMap(w => Object.keys(grouped[w]))));

    const datasets = categories.map((cat, i) => ({
      label: cat,
      data: weeks.map(w => grouped[w][cat] || 0),
      backgroundColor: randomColor(i),
    }));

    const chartData = { labels: weeks, datasets };

    if (chart) chart.destroy();

    chart = new Chart(canvas, {
      type: "bar",
      data: chartData,
      options,
    });
  }

  onMount(buildChart);

  $: if (data) buildChart();
</script>


<div style="height:400px; width:600px;">
  <canvas bind:this={canvas}></canvas>
</div>