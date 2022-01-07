import dynamic from "next/dynamic";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  const [session] = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [windowloaded, setwindowloaded] = useState(false);

  useEffect(() => {
    setwindowloaded(true);
    
    return () => {
      setwindowloaded(false);
    };
  }, []);

  const [snapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );
  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    db.collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      );
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      {windowloaded && (
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex stick top-0 z-50 !justify-center mx-auto"
          editorClassName="mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border p-10"
        />
      )}
    </div>
  );
};

export default TextEditor;
