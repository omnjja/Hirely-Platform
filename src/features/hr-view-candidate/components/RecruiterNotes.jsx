import React, { useState } from "react";
import { TextAlignStart, Pencil, Trash2, Check, X } from "lucide-react";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import ButtonComponent from "@/components/ui/ButtonComponent";
import useApplicationNoteMutation from "../hooks/useApplicationNoteMutation";
import toast from "react-hot-toast";

const RecruiterNotes = ({ data, applicationId }) => {
  const { notes: initialNotes } = data;
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(initialNotes);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const { mutate: addNote } = useApplicationNoteMutation();

  const handleAddNote = () => {
    if (!note.trim()) {
      toast.error("Please write a note before saving.");
      return;
    }
    const newNote = {
      content: note,
    };
    setNotes((prev) => [...prev, newNote]);
    setNote("");
    addNote({
      applicationId: applicationId,
      note: note,
    });
  };

  const handleEdit = (n) => {
    setEditingId(n.id);
    setEditText(n.text);
  };

  const handleEditSave = (id) => {
    if (!editText.trim()) return;
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, content: editText } : n)),
    );
    setEditingId(null);
    toast.success("Note updated.");
    // edit mutation here
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    toast.success("Note deleted.");
    // delete mutation here
  };

  return (
    <div className="md:mt-3 border border-[#0A0A0A] rounded-xl p-3">
      <div className="flex items-center gap-1 mb-1">
        <TextAlignStart size={15} />
        <p className="font-semibold text-[#2A3439] text-sm">Recruiter Notes</p>
      </div>

      {notes.length > 0 && (
        <div className="flex flex-col gap-2">
          {notes.map((n, i) => (
            <div
              key={i}
              className="bg-[#F7F9FB] border border-slate-200 rounded-lg p-3"
            >
              {editingId === n.id ? (
                // Edit mode
                <div className="flex flex-col gap-2">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows={2}
                    className="w-full text-[12px] text-[#2A3439] bg-white border border-slate-300 rounded-lg p-2 resize-none focus:outline-none focus:border-[#4C58A6]"
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex items-center gap-1 text-[11px] text-[#566166] hover:text-[#2A3439]"
                    >
                      <X size={13} /> Cancel
                    </button>
                    <button
                      onClick={() => handleEditSave(n.id)}
                      className="flex items-center gap-1 text-[11px] text-[#4C58A6] font-semibold hover:text-[#3a4585]"
                    >
                      <Check size={13} /> Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[12px] text-[#2A3439] leading-relaxed">
                      {n.content}
                    </p>
                    {/* <p className="text-[10px] text-[#566166] mt-1">
                      {n.createdAt}
                    </p> */}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleEdit(n)}
                      className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-200 text-[#566166] hover:text-[#4C58A6] transition-colors"
                      aria-label="Edit note"
                    >
                      <Pencil size={12} />
                    </button>
                    <button
                      onClick={() => handleDelete(n.id)}
                      className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-red-50 text-[#566166] hover:text-[#9E3F4E] transition-colors"
                      aria-label="Delete note"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <InputFieldWithLabel
          fieldHeight="50"
          placeholder="Add private comments..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <ButtonComponent
          style={{ size: "sm", bgColor: "#4C58A6" }}
          type="submit"
          onClick={handleAddNote}
        >
          Save Note
        </ButtonComponent>
      </div>
    </div>
  );
};

export default RecruiterNotes;
