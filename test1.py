import numpy as np
import matplotlib.pyplot as plt
import pyaudio

# Constants
sampling_rate = 8000  # Hz
duration = 1.0  # seconds
frequency = 1000  # Hz
amplitude = 0.5

# Generate the time values
t = np.linspace(0, duration, int(sampling_rate * duration), endpoint=False)

# Generate the single tone signal
signal = amplitude * np.sin(2 * np.pi * frequency * t)

# Plot the signal
plt.figure(figsize=(10, 4))
plt.plot(t, signal)
plt.title(f"Single Tone Signal: {frequency} Hz")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.grid(True)

# Show the plot
plt.show()

# Playback the signal using PyAudio
p = pyaudio.PyAudio()
stream = p.open(format=pyaudio.paFloat32, channels=1, rate=sampling_rate, output=True)
stream.write(signal.tobytes())
stream.stop_stream()
stream.close()
p.terminate()

