export default function handler(req, res) {
  if (req.method === 'POST') {
    // Simulate cart service
    setTimeout(() => {
      res.status(200).json({ success: true })
    }, 500)
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}