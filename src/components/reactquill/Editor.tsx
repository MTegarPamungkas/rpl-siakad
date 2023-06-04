import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { useAddBeritaStore } from "../../store/berita.store";

const defaultFonts = [
  "Arial",
  "Comic Sans MS",
  "Courier New",
  "Impact",
  "Georgia",
  "Tahoma",
  "Trebuchet MS",
  "Verdana",
];
export default function EditorQuill() {
  // const [value, setValue] = React.useState("");
  const { isiberita, setIsiBerita, error } = useAddBeritaStore();

  const sortedFontOptions = [
    "Logical",
    "Salesforce Sans",
    "Garamond",
    "Sans-Serif",
    "Serif",
    "Times New Roman",
    "Helvetica",
    ...defaultFonts,
  ].sort();

  return (
    <div className="App">
      <SunEditor
        setContents={isiberita}
        onChange={(content) => {
          setIsiBerita(content);
        }}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            // ['paragraphStyle', 'blockquote'],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],

            ["table", "horizontalRule", "link", "image", "video"],
            // ['math'] //You must add the 'katex' library at options to use the 'math' plugin.
            // ['imageGallery'], // You must add the "imageGalleryUrl".
            ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print"],
            ["removeFormat"],

            ["save", "template"],
            // '/', Line break
          ], // Or Array of button list, eg. [['font', 'align'], ['image']]
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
          font: sortedFontOptions,
        }}
      />
      {/* <hr />
      <h2>Example value output:</h2>
      <textarea
        disabled
        value={JSON.stringify(isiberita, null, 2)}
        style={{ width: "100%", resize: "none", height: "600px" }}
      /> */}
    </div>
  );
}
