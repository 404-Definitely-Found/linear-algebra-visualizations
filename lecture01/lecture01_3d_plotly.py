import numpy as np
import plotly.graph_objects as go

x = np.linspace(-3, 3, 20)
y = np.linspace(-3, 3, 20)
X, Y = np.meshgrid(x, y)
Z1 = 3 - X - Y
Z2 = 4 - 2*X - Y
Z3 = 4 - X - 2*Y

fig = go.Figure(data=[go.Surface(x=X, y=Y, z=Z1, opacity=0.5),go.Surface(x=X, y=Y, z=Z2, opacity=0.5),go.Surface(x=X, y=Y, z=Z3, opacity=0.5)])
fig.show()