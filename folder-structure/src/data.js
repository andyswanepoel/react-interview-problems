const data = [
  {
    type: "folder",
    label: "About Me",
    children: [
      {
        type: "file",
        label: "Resume.pdf"
      },
      {
        type: "folder",
        label: "Pictures",
        children: [
          {
            type: "file",
            label: "minnie.jpg"
          },
          {
            type: "file",
            label: "File 3"
          },
          {
            type: "folder",
            label: "F3",
            children: [
              {
                type: "file",
                label: "File 4"
              },
              {
                type: "file",
                label: "File 5"
              }
            ]
          },
          {
            type: "folder",
            label: "F4",
            children: []
          }
        ]
      },
      {
        type: "file",
        label: "Parent File 2"
      }
    ]
  },
  {
    type: "folder",
    label: "Pictures",
    children: [
      {
        type: "file",
        label: "Parent File 1"
      },
      {
        type: "folder",
        label: "Landmarks",
        children: [
          {
            type: "file",
            label: "File 2"
          },
          {
            type: "file",
            label: "File 3"
          }
        ]
      },
      {
        type: "file",
        label: "Parent File 2"
      }
    ]
  }
];

export default data;
