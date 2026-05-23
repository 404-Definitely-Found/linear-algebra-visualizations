'use client'
import Plot from 'react-plotly.js'

const x = Array.from({ length: 200 }, (_, i) => -5 + i * 10 / 199)
const y1 = x.map(xi => 2 * xi)
const y2 = x.map(xi => (xi + 3) / 2)

const hoverLabel = {
  bgcolor: '#1a1a1a',
  bordercolor: '#ffffff20',
  font: { color: '#e8e8e8', size: 12 },
}

export default function RowPicture() {
  return (
    <Plot
      data={[
        {
          x, y: y1,
          type: 'scatter', mode: 'lines',
          name: '2x − y = 0',
          line: { color: '#f97316', width: 2 },
          hovertemplate: 'x: %{x:.2f}<br>y: %{y:.2f}<extra>2x − y = 0</extra>',
        },
        {
          x, y: y2,
          type: 'scatter', mode: 'lines',
          name: '−x + 2y = 3',
          line: { color: '#3a86ff', width: 2 },
          hovertemplate: 'x: %{x:.2f}<br>y: %{y:.2f}<extra>−x + 2y = 3</extra>',
        },
        {
          x: [1], y: [2],
          type: 'scatter', mode: 'markers',
          name: 'solution (1, 2)',
          marker: { color: '#ffffff', size: 9, line: { color: '#0f0f0f', width: 2 } },
          hovertemplate: 'solution<br>(1, 2)<extra></extra>',
        },
      ]}
      layout={{
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: { color: '#888888', size: 11 },
        hovermode: 'closest',
        hoverlabel: hoverLabel,
        xaxis: {
          gridcolor: '#ffffff0d',
          zerolinecolor: '#ffffff25',
          tickfont: { color: '#555555' },
          title: { text: 'x', font: { color: '#666666' } },
        },
        yaxis: {
          gridcolor: '#ffffff0d',
          zerolinecolor: '#ffffff25',
          tickfont: { color: '#555555' },
          title: { text: 'y', font: { color: '#666666' } },
          range: [-6, 6],
        },
        legend: {
          bgcolor: 'transparent',
          x: 0.02, y: 0.98,
          font: { color: '#888888', size: 11 },
        },
        margin: { t: 16, r: 16, b: 40, l: 48 },
      }}
      style={{ width: '100%', height: '100%' }}
      config={{ displayModeBar: false, responsive: true }}
    />
  )
}
