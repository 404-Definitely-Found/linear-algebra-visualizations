import numpy as np
import plotly.graph_objects as go

x = np.linspace(-3, 3, 20)
y = np.linspace(-3, 3, 20)
X, Y = np.meshgrid(x, y)
Z1 = 3 - X - Y
Z2 = 4 - 2*X - Y
Z3 = 4 - X - 2*Y

trace1 = go.Surface(x=X, y=Y, z=Z1, opacity=0.5)
trace2 = go.Surface(x=X, y=Y, z=Z2, opacity=0.5)
trace3 = go.Surface(x=X, y=Y, z=Z3, opacity=0.5)
point = go.Scatter3d(x=[1], y=[1], z=[1], mode='markers', marker=dict(size=8, color='black'))

fig = go.Figure(data=[trace1, trace2, trace3, point])
fig.show()