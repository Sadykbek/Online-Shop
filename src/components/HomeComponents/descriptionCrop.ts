export function descriptionCrop(text: string): string {
   if (text.length <= 80) return text;
 
   const words = text.split(" ");
   let croppedText = "";
 
   for (const word of words) {
     if ((croppedText + word).length > 80) break;
     croppedText += (croppedText ? " " : "") + word;
   }
 
   return croppedText + "...";
 }